  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: '呼啸沙漠',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 呼啸沙漠.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#ebd0c2'
        },
        {
            name: '黄昏湖畔',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 黄昏湖畔.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#46718b'
        },
        {
            name: '勒克斯港',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 勒克斯港.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#43718b'
        },
        {
            name: '暮色雨林',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 暮色雨林.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#46318b'
        },
        {
            name: '血色冰封',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 血色冰封.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#36718b'
        },
        {
            name: '遗忘废墟',
            artist: 'Novasonic',
            url: 'mp3/Novasonic - 遗忘废墟.mp3',
            cover: 'img/cabal.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#26718b'
        },
        {
            name: 'The Saltwater Room',
            artist: 'Owl City',
            url: 'mp3/The Saltwater Room - Owl City.mp3',
            cover: 'img/trs.png',
            lrc: 'lrc/The Saltwater Room - Owl City.lrc',
            theme: '#26716b'
        },
        {
            name: 'Patema Inverse',
            artist: '大岛满',
            url: 'mp3/大岛满 - Patema Inverse.mp3',
            cover: 'img/pm.jpg',
            lrc: 'lrc/大岛满 - Patema Inverse.lrc',
            theme: '#96716b'
        },
        {
            name: '星の在り処',
            artist: 'う～み',
            url: 'mp3/う～み - 星の在り処.mp3',
            cover: 'img/xzsz.jpg',
            lrc: 'lrc/う～み - 星の在り処.lrc',
            theme: '#642386b'
        },
        {
            name: '2年目の春',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - 2年目の春 (第2年的春天).mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#698386b'
        },
        {
            name: 'Pearl White Story',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - Pearl White Story.mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#698386b'
        },
        {
            name: '夜空',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - 夜空.mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#698386b'
        },
        {
            name: '爽風',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - 爽風.mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#698386b'
        },
        {
            name: 'Speed of Light',
            artist: '二宮愛/DJ OKAWARI',
            url: 'mp3/塞壬唱片-MSR _ 二宮愛 _ DJ OKAWARI - Speed of Light.mp3',
            cover: 'img/sol.jpg',
            lrc: 'lrc/塞壬唱片-MSR _ 二宮愛 _ DJ OKAWARI - Speed of Light.lrc',
            theme: '#698386b'
        }
    ]
});