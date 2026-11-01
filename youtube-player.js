// ----------------------------------------------------
// YouTube Iframe API & コントローラー処理
// ----------------------------------------------------
let player;

// 1. Iframe API スクリプトの動的読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. API準備完了時の初期化
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '100%',
        videoId: '2I25AFSBm2g', // 初期動画
        playerVars: {
            'playsinline': 1,
            'controls': 1,
            'rel': 0,
            'modestbranding': 1,
            'iv_load_policy': 3
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// プレイヤー準備完了時（初期画質を軽量なsmallに設定）
function onPlayerReady(event) {
    console.log("YouTube Player Prepared");
    event.target.setPlaybackQuality('small');
}

// URLまたは動画IDからIDを抽出
function extractVideoId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
}

// ----------------------------------------------------
// Blocklyや外部から呼び出す制御オブジェクト
// ----------------------------------------------------
window.youtubeController = {
    // 動画読み込み ＆ 再生（同時に画質を落として軽量化）
    loadAndPlay: function(urlOrId) {
        if (!player || typeof player.loadVideoById !== 'function') {
            alert("YouTubeプレーヤーの準備がまだできていません。数秒待ってから実行してください。");
            return;
        }
        var videoId = extractVideoId(urlOrId);
        player.loadVideoById(videoId);
        player.setPlaybackQuality('small');
    },

    // 再生
    play: function() {
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
            player.setPlaybackQuality('small');
        }
    },

    // 一時停止
    pause: function() {
        if (player && typeof player.pauseVideo === 'function') {
            player.pauseVideo();
        }
    },

    // 音量設定 (0〜100)
    setVolume: function(volume) {
        if (player && typeof player.setVolume === 'function') {
            let vol = Math.max(0, Math.min(100, Number(volume)));
            player.setVolume(vol);
            console.log("音量変更:", vol + "%");
        }
    },

    // 画質設定 ('small', 'medium', 'large', 'hd720' など)
    setQuality: function(quality) {
        if (player && typeof player.setPlaybackQuality === 'function') {
            player.setPlaybackQuality(quality);
            console.log("画質変更:", quality);
        }
    },

    // メモリ ＆ バッファ（読み込み進捗）情報の取得
    getPerformanceInfo: function() {
        let memoryText = "非対応ブラウザ";
        let bufferPercent = 0;

        // Chrome等のJSヒープメモリ取得
        if (performance && performance.memory) {
            let usedMB = Math.round(performance.memory.usedJSHeapSize / (1024 * 1024));
            memoryText = usedMB + " MB";
        }

        // 動画バッファ進捗率
        if (player && typeof player.getVideoLoadedFraction === 'function') {
            bufferPercent = Math.round(player.getVideoLoadedFraction() * 100);
        }

        return {
            memory: memoryText,
            buffer: bufferPercent
        };
    }
};
