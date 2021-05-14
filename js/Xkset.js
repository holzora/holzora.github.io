/*
function disptime(){  
    var today=new Date();  
    var hh=today.getHours();  
    var mm=today.getMinutes();  
    var ss = today.getSeconds();  
    document.getElementById("myclock").innerHTML="<span>"+hh+":"+mm+":"+ss+"</span>"  
     }
    var mytime = setInterval("disptime()",1000);

function show_runtime(){window.setTimeout("show_runtime()",1000);
    X=new Date("05/14/2021 23:00:00");
    Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;
    a=T/M;A=Math.floor(a);b=(a-A)*24;B=Math.floor(b);c=(b-B)*60;C=Math.floor((b-B)*60);D=Math.floor((c-C)*60);
    runtime_span.innerHTML="本站已运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"}show_runtime();
*/

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
            theme: '#D52B91'
        },
        {
            name: '星の在り処',
            artist: 'う～み',
            url: 'mp3/う～み - 星の在り処.mp3',
            cover: 'img/xzsz.jpg',
            lrc: 'lrc/う～み - 星の在り処.lrc',
            theme: '#FFD700'
        },
        {
            name: '2年目の春',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - 2年目の春 (第2年的春天).mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#8B2500'
        },
        {
            name: 'Pearl White Story',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - Pearl White Story.mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#6E6E6E'
        },
        {
            name: '夜空',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - 夜空.mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#EED2EE'
        },
        {
            name: '爽風',
            artist: 'S.E.N.S.',
            url: 'mp3/S.E.N.S. (神思者) - 爽風.mp3',
            cover: 'img/hxgsn.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#CDAF95'
        },
        {
            name: 'Speed of Light',
            artist: '塞壬唱片/二宮愛/DJ OKAWARI',
            url: 'mp3/塞壬唱片-MSR _ 二宮愛 _ DJ OKAWARI - Speed of Light.mp3',
            cover: 'img/sol.jpg',
            lrc: 'lrc/塞壬唱片-MSR _ 二宮愛 _ DJ OKAWARI - Speed of Light.lrc',
            theme: '#9AFF9A'
        },
        {
            name: 'Till the Bell Tolls',
            artist: '塞壬唱片',
            url: 'mp3/Till the Bell Tolls - 塞壬唱片.mp3',
            cover: 'img/ttbt.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#8B1A1A'
        },
        {
            name: '秋绪',
            artist: '塞壬唱片/田井中彩智',
            url: 'mp3/塞壬唱片-MSR _ 田井中彩智 - 秋绪.mp3',
            cover: 'img/qx.jpg',
            lrc: 'lrc/塞壬唱片-MSR _ 田井中彩智 - 秋绪.lrc',
            theme: '#43CD80'
        },
        {
            name: 'Alive',
            artist: '塞壬唱片/Alive Until Sunset',
            url: 'mp3/ALIVE - 塞壬唱片-MSR_Alive Until Sunset.mp3',
            cover: 'img/a.jpg',
            lrc: 'lrc/ALIVE - 塞壬唱片-MSR_Alive Until Sunset.lrc',
            theme: '#1AE61A'
        },
        {
            name: 'Reversed Time',
            artist: '塞壬唱片',
            url: 'mp3/Reversed Time - 塞壬唱片-MSR.mp3',
            cover: 'img/rt.jpg',
            lrc: 'lrc/am.lrc',
            theme: '#2248DD'
        }
    ]
});