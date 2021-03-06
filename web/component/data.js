import icon_ginza from "../icon_ginza.png";
import icon_marunouchi from "../icon_marunouchi.png";
import icon_hibiya from "../icon_hibiya.png";
import icon_tozai from "../icon_tozai.png";
import icon_chiyoda from "../icon_chiyoda.png";
import icon_yurakucho from "../icon_yurakucho.png";
import icon_hanzomon from "../icon_hanzomon.png";
import icon_nanboku from "../icon_namboku.png";
import icon_fukutoshin from "../icon_fukutoshin.png";

const data = {
    junkai: [
        {
            id: 1, items: [{id: 1, name: "わたしは"},
                {id: 2, name: "1985年"},
                {id: 3, name: "6月"},
                {id: 4, name: "29日"}]
        },
        {
            id: 2, items: [{id: 1, name: "おれは"},
                {id: 2, name: "2018年"},
                {id: 3, name: "12月"},
                {id: 4, name: "31日"}]
        },
        {
            id: 3, items: [{id: 1, name: "PC"},
                {id: 2, name: "CPU"}, {id: 3, name: "もっと性能いいの"},
                {id: 4, name: "欲しい"}]
        }
    ]
    ,
    lines: [
        {id: 1, name: '銀座線'},
        {id: 2, name: '丸ノ内線'},
        {id: 3, name: '日比谷線'},
        {id: 4, name: '東西線'},
        {id: 5, name: '千代田線'},
        {id: 6, name: '有楽町線'},
        {id: 7, name: '半蔵門線'},
        {id: 8, name: '南北線'},
        {id: 9, name: '副都心線'}
    ],
    icons:
        [
            {id: 1, src: icon_ginza},
            {id: 2, src: icon_marunouchi},
            {id: 3, src: icon_hibiya},
            {id: 4, src: icon_tozai},
            {id: 5, src: icon_chiyoda},
            {id: 6, src: icon_yurakucho},
            {id: 7, src: icon_hanzomon},
            {id: 8, src: icon_nanboku},
            {id: 9, src: icon_fukutoshin}
        ],
    bases:
        [
            {lineid: 1, id: 1, name: '浅草'},
            {lineid: 1, id: 2, name: '田原町'},
            {lineid: 1, id: 3, name: '稲荷町'},
            {lineid: 1, id: 4, name: '上野'},
            {lineid: 1, id: 5, name: '上野広小路'},
            {lineid: 1, id: 6, name: '末広町'},
            {lineid: 1, id: 7, name: '神田'},
            {lineid: 1, id: 8, name: '三越前'},
            {lineid: 1, id: 9, name: '日本橋'},
            {lineid: 1, id: 10, name: '京橋'},
            {lineid: 1, id: 11, name: '銀座'},
            {lineid: 1, id: 12, name: '新橋'},
            {lineid: 1, id: 13, name: '虎ノ門'},
            {lineid: 1, id: 14, name: '溜池山王'},
            {lineid: 1, id: 15, name: '赤坂見附'},
            {lineid: 1, id: 16, name: '青山一丁目'},
            {lineid: 1, id: 17, name: '外苑前'},
            {lineid: 1, id: 18, name: '表参道'},
            {lineid: 1, id: 19, name: '渋谷'},
            {lineid: 2, id: 1, name: '池袋'},
            {lineid: 2, id: 2, name: '新大塚'},
            {lineid: 2, id: 3, name: '茗荷谷'},
            {lineid: 2, id: 4, name: '後楽園'},
            {lineid: 2, id: 5, name: '本郷三丁目'},
            {lineid: 2, id: 6, name: '御茶ノ水'},
            {lineid: 2, id: 7, name: '淡路町'},
            {lineid: 2, id: 8, name: '大手町'},
            {lineid: 2, id: 9, name: '東京'},
            {lineid: 2, id: 10, name: '銀座'},
            {lineid: 2, id: 11, name: '霞ケ関'},
            {lineid: 2, id: 12, name: '国会議事堂前'},
            {lineid: 2, id: 13, name: '赤坂見附'},
            {lineid: 2, id: 14, name: '四ツ谷'},
            {lineid: 2, id: 15, name: '四谷三丁目'},
            {lineid: 2, id: 16, name: '新宿御苑前'},
            {lineid: 2, id: 17, name: '新宿三丁目'},
            {lineid: 2, id: 18, name: '新宿'},
            {lineid: 2, id: 19, name: '西新宿'},
            {lineid: 2, id: 20, name: '中野坂上'},
            {lineid: 2, id: 21, name: '新中野'},
            {lineid: 2, id: 22, name: '東高円寺'},
            {lineid: 2, id: 23, name: '新高円寺'},
            {lineid: 2, id: 24, name: '南阿佐ケ谷'},
            {lineid: 2, id: 25, name: '荻窪'},
            {lineid: 2, id: 26, name: '中野新橋'},
            {lineid: 2, id: 27, name: '中野富士見町'},
            {lineid: 2, id: 28, name: '方南町'},
            {lineid: 3, id: 1, name: '北千住'},
            {lineid: 3, id: 2, name: '南千住'},
            {lineid: 3, id: 3, name: '三ノ輪'},
            {lineid: 3, id: 4, name: '入谷'},
            {lineid: 3, id: 5, name: '上野'},
            {lineid: 3, id: 6, name: '仲御徒町'},
            {lineid: 3, id: 7, name: '秋葉原'},
            {lineid: 3, id: 8, name: '小伝馬町'},
            {lineid: 3, id: 9, name: '人形町'},
            {lineid: 3, id: 10, name: '茅場町'},
            {lineid: 3, id: 11, name: '八丁堀'},
            {lineid: 3, id: 12, name: '築地'},
            {lineid: 3, id: 13, name: '東銀座'},
            {lineid: 3, id: 14, name: '銀座'},
            {lineid: 3, id: 15, name: '日比谷'},
            {lineid: 3, id: 16, name: '霞ケ関'},
            {lineid: 3, id: 17, name: '神谷町'},
            {lineid: 3, id: 18, name: '六本木'},
            {lineid: 3, id: 19, name: '広尾'},
            {lineid: 3, id: 20, name: '恵比寿'},
            {lineid: 3, id: 21, name: '中目黒'},
            {lineid: 4, id: 1, name: '中野'},
            {lineid: 4, id: 2, name: '落合'},
            {lineid: 4, id: 3, name: '高田馬場'},
            {lineid: 4, id: 4, name: '早稲田'},
            {lineid: 4, id: 5, name: '神楽坂'},
            {lineid: 4, id: 6, name: '飯田橋'},
            {lineid: 4, id: 7, name: '九段下'},
            {lineid: 4, id: 8, name: '竹橋'},
            {lineid: 4, id: 9, name: '大手町'},
            {lineid: 4, id: 10, name: '日本橋'},
            {lineid: 4, id: 11, name: '茅場町'},
            {lineid: 4, id: 12, name: '門前仲町'},
            {lineid: 4, id: 13, name: '木場'},
            {lineid: 4, id: 14, name: '東陽町'},
            {lineid: 4, id: 15, name: '南砂町'},
            {lineid: 4, id: 16, name: '西葛西'},
            {lineid: 4, id: 17, name: '葛西'},
            {lineid: 5, id: 1, name: '北綾瀬'},
            {lineid: 5, id: 2, name: '綾瀬'},
            {lineid: 5, id: 3, name: '北千住'},
            {lineid: 5, id: 4, name: '町屋'},
            {lineid: 5, id: 5, name: '西日暮里'},
            {lineid: 5, id: 6, name: '千駄木'},
            {lineid: 5, id: 7, name: '根津'},
            {lineid: 5, id: 8, name: '湯島'},
            {lineid: 5, id: 9, name: '新御茶ノ水'},
            {lineid: 5, id: 10, name: '大手町'},
            {lineid: 5, id: 11, name: '二重橋前'},
            {lineid: 5, id: 12, name: '日比谷'},
            {lineid: 5, id: 13, name: '霞ケ関'},
            {lineid: 5, id: 14, name: '国会議事堂前'},
            {lineid: 5, id: 15, name: '赤坂'},
            {lineid: 5, id: 16, name: '乃木坂'},
            {lineid: 5, id: 17, name: '表参道'},
            {lineid: 5, id: 18, name: '明治神宮前'},
            {lineid: 5, id: 19, name: '代々木公園'},
            {lineid: 5, id: 20, name: '代々木上原'},
            {lineid: 6, id: 1, name: '地下鉄成増'},
            {lineid: 6, id: 2, name: '地下鉄赤塚'},
            {lineid: 6, id: 3, name: '平和台'},
            {lineid: 6, id: 4, name: '氷川台'},
            {lineid: 6, id: 5, name: '小竹向原'},
            {lineid: 6, id: 6, name: '千川'},
            {lineid: 6, id: 7, name: '要町'},
            {lineid: 6, id: 8, name: '池袋'},
            {lineid: 6, id: 9, name: '東池袋'},
            {lineid: 6, id: 10, name: '護国寺'},
            {lineid: 6, id: 11, name: '江戸川橋'},
            {lineid: 6, id: 12, name: '飯田橋'},
            {lineid: 6, id: 13, name: '市ケ谷'},
            {lineid: 6, id: 14, name: '麹町'},
            {lineid: 6, id: 15, name: '永田町'},
            {lineid: 6, id: 16, name: '桜田門'},
            {lineid: 6, id: 17, name: '有楽町'},
            {lineid: 6, id: 18, name: '銀座一丁目'},
            {lineid: 6, id: 19, name: '新富町'},
            {lineid: 6, id: 20, name: '月島'},
            {lineid: 6, id: 21, name: '豊洲'},
            {lineid: 6, id: 22, name: '辰巳'},
            {lineid: 6, id: 23, name: '新木場'},
            {lineid: 7, id: 1, name: '渋谷'},
            {lineid: 7, id: 2, name: '表参道'},
            {lineid: 7, id: 3, name: '青山一丁目'},
            {lineid: 7, id: 4, name: '永田町'},
            {lineid: 7, id: 5, name: '半蔵門'},
            {lineid: 7, id: 6, name: '九段下'},
            {lineid: 7, id: 7, name: '神保町'},
            {lineid: 7, id: 8, name: '大手町'},
            {lineid: 7, id: 9, name: '三越前'},
            {lineid: 7, id: 10, name: '水天宮前'},
            {lineid: 7, id: 11, name: '清澄白河'},
            {lineid: 7, id: 12, name: '住吉'},
            {lineid: 7, id: 13, name: '錦糸町'},
            {lineid: 7, id: 14, name: '押上'},
            {lineid: 8, id: 1, name: '目黒'},
            {lineid: 8, id: 2, name: '白金台'},
            {lineid: 8, id: 3, name: '白金高輪'},
            {lineid: 8, id: 4, name: '麻布十番'},
            {lineid: 8, id: 5, name: '六本木一丁目'},
            {lineid: 8, id: 6, name: '溜池山王'},
            {lineid: 8, id: 7, name: '永田町'},
            {lineid: 8, id: 8, name: '四ツ谷'},
            {lineid: 8, id: 9, name: '市ケ谷'},
            {lineid: 8, id: 10, name: '飯田橋'},
            {lineid: 8, id: 11, name: '後楽園'},
            {lineid: 8, id: 12, name: '東大前'},
            {lineid: 8, id: 13, name: '本駒込'},
            {lineid: 8, id: 14, name: '駒込'},
            {lineid: 8, id: 15, name: '西ケ原'},
            {lineid: 8, id: 16, name: '王子'},
            {lineid: 8, id: 17, name: '王子神谷'},
            {lineid: 8, id: 18, name: '志茂'},
            {lineid: 8, id: 19, name: '赤羽岩淵'},
            {lineid: 9, id: 1, name: '地下鉄成増'},
            {lineid: 9, id: 2, name: '地下鉄赤塚'},
            {lineid: 9, id: 3, name: '平和台'},
            {lineid: 9, id: 4, name: '氷川台'},
            {lineid: 9, id: 5, name: '小竹向原'},
            {lineid: 9, id: 6, name: '千川'},
            {lineid: 9, id: 7, name: '要町'},
            {lineid: 9, id: 8, name: '池袋'},
            {lineid: 9, id: 9, name: '雑司が谷'},
            {lineid: 9, id: 10, name: '西早稲田'},
            {lineid: 9, id: 11, name: '東新宿'},
            {lineid: 9, id: 12, name: '新宿三丁目'},
            {lineid: 9, id: 13, name: '北参道'},
            {lineid: 9, id: 14, name: '明治神宮前'},
            {lineid: 9, id: 15, name: '渋谷'}
        ]
};
export default data;