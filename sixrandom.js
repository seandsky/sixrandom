var startinfo;
var where               = new Array();      //地区
var three_random        = new Array();      //硬币取爻
var six_random          = new Array();      //本爻
var six_change_random   = new Array();      //变爻
var six_random_empty	= new Array();
var six_random_myth		= new Array();
var six_random_help_myth = new Array();		
var six_random_date		= new Array();
var six_random_draw		= new Array();
var six_random_NaJia 	= new Array();


const sixtycycletable = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const oldnegativevalue = 0;                 //老阴
const negativevalue = 1;                    //少阴
const positivevalue = 2;                    //少阳    
const oldpositivevalue = 3                  //老阳
const randomtime = 6 

const negativedraw = "---   ---";
const positivedraw = "---------";
const negativechangedraw = "X->";
const positivechangedraw = "O->";
const nonechangedraw = "   ";


six_random_NaJia["000000"] = {
"name":"乾为天",
"p":"乾宫",
"1":"父母壬戌土 世",
"2":"兄弟壬申金",
"3":"官鬼壬午火",
"4":"父母甲辰土 应",
"5":"妻财甲寅木",
"6":"子孙甲子水"
}

six_random_NaJia["000001"] = {
"name":"天风姤",
"p":"乾宫",
"1":"父母壬戌土",
"2":"兄弟壬申金",
"3":"官鬼壬午火 应",
"4":"兄弟辛酉金",
"5":"子孙辛亥水",
"6":"父母辛丑土 世"
}

six_random_NaJia["000010"] = {
"name":"天山遁",
"p":"乾宫",
"1":"父母壬戌土",
"2":"兄弟壬申金 应",
"3":"官鬼壬午火",
"4":"兄弟丙申金",
"5":"官鬼丙午火 世",
"6":"父母丙辰土"
}

six_random_NaJia["000001"] = {
"name":"天地否",
"p":"乾宫",
"1":"父母壬戌土 应",
"2":"兄弟壬申金",
"3":"官鬼壬午火",
"4":"妻财乙卯木 世",
"5":"官鬼乙巳火",
"6":"父母乙未土"
}

six_random_NaJia["000001"] = {
"name":"风地观",
"p":"乾宫",
"1":"妻财辛卯木",
"2":"官鬼辛巳火",
"3":"父母辛未土 世",
"4":"妻财乙卯木",
"5":"官鬼乙巳火",
"6":"父母乙未土 应"
}

six_random_NaJia["000001"] = {
"name":"山地剥",
"p":"乾宫",
"1":"妻财丙寅木",
"2":"子孙丙子水 世",
"3":"父母丙戌土",
"4":"妻财乙卯木",
"5":"官鬼乙巳火 应",
"6":"父母乙未土"
}

six_random_NaJia["000001"] = {
"name":"火地晋",
"p":"乾宫",
"1":"官鬼己巳火",
"2":"父母己未土",
"3":"兄弟己酉金 世",
"4":"妻财乙卯木",
"5":"官鬼乙巳火",
"6":"父母乙未土 应"
}

six_random_NaJia["000001"] = {
"name":"火天大有",
"p":"乾宫",
"1":"官鬼己巳火 应",
"2":"父母己未土",
"3":"兄弟己酉金",
"4":"父母甲辰土 世",
"5":"妻财甲寅木",
"6":"子孙甲子水"
}

six_random_NaJia["000001"] = {
"name":"兑为泽",
"p":"兑宫",
"1":"父母丁未土 世",
"2":"兄弟丁酉金",
"3":"子孙丁亥水",
"4":"父母丁丑土 应",
"5":"妻财丁卯木",
"6":"官鬼丁巳火"
}

six_random_NaJia["000001"] = {
"name":"泽水困",
"p":"兑宫",
"1":"父母丁未土",
"2":"兄弟丁酉金",
"3":"子孙丁亥水 应",
"4":"官鬼戊午火",
"5":"父母戊辰土",
"6":"妻财戊寅木 世"
}

six_random_NaJia["000001"] = {
"name":"泽地萃",
"p":"兑宫",
"1":"父母丁未土",
"2":"兄弟丁酉金 应",
"3":"子孙丁亥水",
"4":"妻财乙卯木",
"5":"官鬼乙巳火 世",
"6":"父母乙未土"
}

six_random_NaJia["000001"] = {
"name":"泽山咸",
"p":"兑宫",
"1":"父母丁未土 应",
"2":"兄弟丁酉金",
"3":"子孙丁亥水",
"4":"兄弟丙申金 世",
"5":"官鬼丙午火",
"6":"父母丙辰土"
}

six_random_NaJia["000001"] = {
"name":"水山蹇",
"p":"兑宫",
"1":"子孙戊子水",
"2":"父母戊戌土",
"3":"兄弟戊申金 世",
"4":"兄弟丙申金",
"5":"官鬼丙午火",
"6":"父母丙辰土 应"
}

six_random_NaJia["000100"] = {
"name":"地山谦",
"p":"兑宫",
"1":"兄弟癸酉金",
"2":"子孙癸亥水 世",
"3":"父母癸丑土",
"4":"兄弟丙申金",
"5":"官鬼丙午火 应",
"6":"父母丙辰土"
}

six_random_NaJia["000001"] = {
"name":"雷山小过",
"p":"兑宫",
"1":"父母庚戌土",
"2":"兄弟庚申金",
"3":"官鬼庚午火 世",
"4":"兄弟丙申金",
"5":"官鬼丙午火",
"6":"父母丙辰土 应"
}

six_random_NaJia["000001"] = {
"name":"雷泽归妹",
"p":"兑宫",
"1":"父母庚戌土 应",
"2":"兄弟庚申金",
"3":"官鬼庚午火",
"4":"父母丁丑土 世",
"5":"妻财丁卯木",
"6":"官鬼丁巳火"
}

six_random_NaJia["000001"] = {
"name":"离为火",
"p":"离宫",
"1":"兄弟己巳火 世",
"2":"子孙己未土",
"3":"妻财己酉金",
"4":"官鬼己亥水 应",
"5":"子孙己丑土",
"6":"父母己卯木"
}

six_random_NaJia["000001"] = {
"name":"火山旅",
"p":"离宫",
"1":"兄弟己巳火",
"2":"子孙己未土",
"3":"妻财己酉金 应",
"4":"妻财丙申金",
"5":"兄弟丙午火",
"6":"子孙丙辰土 世"
}

six_random_NaJia["000001"] = {
"name":"火风鼎",
"p":"离宫",
"1":"兄弟己巳火",
"2":"子孙己未土 应",
"3":"妻财己酉金",
"4":"妻财辛酉金",
"5":"官鬼辛亥水 世",
"6":"子孙辛丑土"
}

six_random_NaJia["000001"] = {
"name":"火水未济",
"p":"离宫",
"1":"兄弟己巳火 应",
"2":"子孙己未土",
"3":"妻财己酉金",
"4":"兄弟戊午火 世",
"5":"子孙戊辰土",
"6":"父母戊寅木"
}

six_random_NaJia["000001"] = {
"name":"山水蒙",
"p":"离宫",
"1":"父母丙寅木",
"2":"官鬼丙子水",
"3":"子孙丙戌土 世",
"4":"兄弟戊午火",
"5":"子孙戊辰土",
"6":"父母戊寅木 应"
}

six_random_NaJia["000001"] = {
"name":"风水涣",
"p":"离宫",
"1":"父母辛卯木",
"2":"兄弟辛巳火 世",
"3":"子孙辛未土",
"4":"兄弟戊午火",
"5":"子孙戊辰土 应",
"6":"父母戊寅木"
}

six_random_NaJia["000001"] = {
"name":"天水讼",
"p":"离宫",
"1":"子孙壬戌土",
"2":"妻财壬申金",
"3":"兄弟壬午火 世",
"4":"兄弟戊午火",
"5":"子孙戊辰土",
"6":"父母戊寅木 应"
}

six_random_NaJia["000001"] = {
"name":"天火同人",
"p":"离宫",
"1":"子孙壬戌土 应",
"2":"妻财壬申金",
"3":"兄弟壬午火",
"4":"官鬼己亥水 世",
"5":"子孙己丑土",
"6":"父母己卯木"
}





































 






































































var j = [43856, 19416, 19168, 42352, 21717, 53856, 55632, 25940, 22191, 39632, 21970, 19168, 42422, 42192, 53840, 53845, 46415, 54944, 44450, 38320, 18807, 18815, 42160, 46261, 27216, 27968, 43860, 11119, 38256, 21234, 18800, 25958, 54432, 59984, 27285, 23263, 11104, 34531, 37615, 51415, 51551, 54432, 55462, 46431, 22176, 42420, 9695, 37584, 53938, 43344, 46423, 27808, 46416, 21333, 19887, 42416, 17779, 21183, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 38310, 38335, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 20854, 21183, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 53430, 53855, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 45653, 27951, 44448, 19299, 37759, 18936, 18800, 25776, 26790, 59999, 27424, 42692, 43759, 37600, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 19285, 19311, 42352, 21732, 53856, 59752, 54560, 55968, 27302, 22239, 19168, 43476, 42192, 53584, 62034, 54560];
var o = ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"];
var l = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
var h = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var d = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var p = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var k = ["初", "十", "廿", "三十"];
var g = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var n = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "腊"];

function comefrom(loca,locacity) { this.loca = loca; this.locacity = locacity; } 
where[0]    = new comefrom("选择省份","选择城市");
where[1]    = new comefrom("福建","|安溪|长乐|长泰|长汀|崇安|大田|德化|东山|福安|福鼎|福清|福州|光泽|华安|惠安|吉田|建宁|建瓯|将乐|金门|晋江|连城|连江|龙海|龙溪|龙岩|罗源|闽侯|闽清|明溪|南安|南靖|南平|宁德|宁化|平和|平潭|屏南|莆田|浦城|清流|泉州|三明|沙县|上杭|邵武|寿宁|顺昌|松溪|泰宁|同安|武平|霞浦|厦门|仙游|永安|永春|永定|永泰|云霄|漳平|漳浦|漳州|诏安|柘荣|政和|周宁"); 
where[2]    = new comefrom("广东","|宝安|博罗|潮安|潮阳|潮州|澄海|从化|大埔|德庆|电白|东莞|斗门|恩平|番禺|丰顺|封开|佛岗|佛山|高明|高要|高州|广宁|广州|海丰|海康|海口|和平|河源|鹤山|洪江|花县|化州|怀集|惠东|惠来|惠阳|惠州|江门|蕉岭|揭西|揭阳|开平|乐昌|连南|连平|连山|连县|廉江|龙川|龙门|陆丰|罗定|茂名|梅县|梅州|南澳|南海|南雄|平远|普宁|清远|曲江|饶平|仁化|乳源|三水|汕头|韶关|深圳|始兴|顺德|四会|遂溪|台山|翁源|吴川|五华|新会|新十|新兴|信宜|兴宁|徐闻|阳春|阳江|阳山|英德|郁南|云浮|增城|肇庆|中山|珠海|紫金"); 
where[3]    = new comefrom("北京","|北京|昌平|大兴|房山|怀柔|密云|平谷|顺义|通县|延庆"); 
where[4]    = new comefrom("上海","|宝山|崇明|川沙|奉贤|嘉定|金山|南汇|青浦|上海|松江"); 
where[5]    = new comefrom("天津","|宝坻|蓟县|静海|宁河|天津|武清"); 
where[6]    = new comefrom("重庆","|壁山|长寿|大足|合川|南桐|綦江|荣昌|铜梁|潼南|万盛|永川|重庆"); 
where[7]    = new comefrom("河北","|安次|安国|安平|安新|霸县|柏乡|保定|泊头|博野|沧州|昌黎|成安|承德|赤城|崇礼|磁县|大厂|大城|大名|定县|定兴|东光|肥乡|丰南|丰宁|丰润|抚宁|阜城|阜平|高阳|高邑|藁城|沽源|固安|故城|馆陶|广平|广宗|海兴|邯郸|河间|衡水|怀安|怀来|黄骅|获鹿|鸡泽|冀县|交河|晋县|井陉|景县|巨鹿|康保|宽城|涞水|涞源|廊坊|乐亭|蠡县|临城|临西|临漳|灵寿|隆化|隆尧|卢龙|栾城|滦南|滦平|滦县|满城|孟村|内丘|南官|南和|南皮|宁普|平泉|平山|平乡|迁安|迁西|秦皇岛|青龙|青县|清河|清苑|丘县|曲阳|曲周|饶阳|任丘|任县|容城|三河|沙河|尚义|涉县|深县|深泽|石家庄|束鹿|肃宁|唐海|唐山|唐县|完县|万全|望都|威县|围场|蔚县|魏县|文安|无极|吴桥|武安|武强|武邑|献县|香河|新城|新河|新乐|兴隆|行唐|邢台|雄县|徐水|宣化|盐山|阳原|易县|永年|永清|玉田|元氏|赞皇|枣强|张北|张家口|赵县|正定|涿鹿|涿县|遵化"); 
where[8]    = new comefrom("山西","|安泽|保德|长治|长子|大宁|大同|代县|定襄|繁峙|方由|汾西|汾阳|浮山|高平|古县|广灵|和顺|河津|河曲|洪洞|侯马|壶关|怀仁|浑源|霍县|吉县|稷山|绛县|交城|交口|介休|晋城|静乐|岢岚|岚县|离石|黎城|临汾|临县|临猗|灵丘|灵石|陵川|柳林|娄烦|潞城|孟县|宁武|偏关|平定|平鲁|平陆|平顺|平遥|蒲县|祁县|沁水|沁县|沁源|清徐|曲沃|芮城|山阴|神池|石楼|寿阳|朔县|太谷|太原|天镇|屯留|万荣|文水|闻喜|五台|五寨|武乡|昔阳|夏县|乡宁|襄汾|襄垣|孝义|忻县|新绛|兴县|阳城|阳高|阳曲|阳泉|翼城|应县|永和|永济|右玉|榆次|榆社|垣曲|原平|运城|中阳|左权|左云"); 
where[9]    = new comefrom("内蒙古","|阿巴嘎旗|阿巴哈纳尔旗|阿拉善右旗|阿拉善左旗|阿鲁科尔沁旗|阿荣旗|敖汉旗|巴林右旗|巴林左旗|包头|布特哈旗|察哈尔右翼后旗|察哈尔右翼前旗|察哈尔右翼中旗|陈巴尔虎旗|赤峰|达尔罕茂明安联合旗|达拉特旗|磴口|东胜县|东乌珠穆沁旗|多伦|额尔古纳右旗|额尔古纳左旗|额济纳旗|鄂伦春自治旗|鄂托克旗|鄂托克前旗|鄂温克族自治旗|二连浩特|丰镇|固阳|海拉尔|杭锦后旗|杭锦旗|和林格尔|呼和浩特|化德|集宁|喀喇沁旗|开鲁|科尔沁右翼前旗|科尔沁右翼中旗|科尔沁左翼后旗|科尔沁左翼中旗|克什克腾旗|库伦旗|凉城|林西|临河|满洲里|莫力达瓦达斡尔族自治旗|奈曼旗|宁城|清水河|商都|上默特右旗|上默特左旗|四子王旗|苏尼特右旗|苏尼特左旗|太仆寺旗|通辽|突泉|托克托|翁牛特旗|乌海|乌拉特后旗|乌拉特前旗|乌拉特中旗|乌兰浩特|乌审旗|五原|武川|西乌珠穆沁旗|喜桂图旗|镶黄旗|新巴尔虎右旗|新巴尔虎左旗|兴和|伊金霍洛旗|伊克昭盟|扎鲁特旗|正蓝旗|正镶白旗|准格尔旗|卓资"); 
where[10]   = new comefrom("辽宁","|鞍由|北票|北镇|本溪|昌图|长海|朝阳|大连|大洼|丹东|灯塔|东沟|法库|凤城|抚顺|阜新|复县|盖县|海城|黑山|建昌|建平|金县|锦西|锦县|锦州|开原|康平|宽甸|辽阳|辽中|凌源|盘山|清原|沈阳|绥中|台安|铁法|铁岭|西丰|新宾|新金|新民|兴城|岫岩|义县|营口|垣仁|彰武|庄河"); 
where[11]   = new comefrom("吉林","|安图|白城|长白|长春|长岭|大安|德惠|东丰|敦化|扶余|抚松|海龙|和龙|桦甸|怀德|珲春|辉南|浑江|吉林|集安|蛟河|靖宇|九台|梨树|辽源|柳河|农安|磐石|乾安|舒兰|双辽|双阳|四平|洮安|通化|通榆|图们|汪清|延吉|伊通|永吉|榆树"); 
where[12]   = new comefrom("黑龙江","|阿城|爱辉|安达|巴彦|拜泉|宝清|北安|宾县|勃利|大庆|德都|东宁|杜尔伯特|方正|抚远|富锦|富裕|甘南|哈尔滨|海林|海伦|鹤岗|黑河|呼兰|呼玛|虎林|桦川|桦南|鸡东|鸡四|集贤|加格达奇|佳木斯|嘉荫|克东|克山|兰西|林甸|林口|龙江|萝北|密山|明水|漠河|牡丹江|木兰|穆棱|讷河|嫩江|宁安|七台河|齐齐哈尔|青岗|庆安|饶河|尚志|双城|双鸭山|绥滨|绥芬河|绥化|绥棱|孙吴|塔河|泰来|汤源|铁力|通北|通河|同江|望奎|五常|逊克|延寿|伊春|依安|依兰|肇东|肇源|肇州"); 
where[13]   = new comefrom("安徽","|合肥|长丰|淮南|凤台|淮北|濉溪|芜湖|铜陵|蚌埠|马鞍山|安庆|宿州|宿县|砀山|萧县|吴壁|泗县|五河|固镇|怀远|滁州|嘉山|天长|来安|全椒|定远|凤阳|巢湖|巢县|肥东|含山|和县|无为|卢江|宣城|当涂|郎溪|广德|泾县|南陵|繁昌|宁国|青阳|屯溪|休宁|旌得|绩溪|歙县|祁门|黟县|太平|石台|桐城|纵阳|怀宁|望江|宿松|太湖|岳西|潜山|东至|贵池|六安|霍丘|寿县|肥西|舒城|霍山|金寨|阜阳|毫县|涡阳|蒙城|利辛|颖上|阜南|临泉|界首|太和"); 
where[14]   = new comefrom("江苏","|宝应|滨海|常熟|常州|大丰|丹徒|丹阳|东海|东台|丰县|阜宁|赣榆|高淳|高邮|灌南|灌云|海安|海门|邗江|洪泽|淮安|淮阴|建湖|江都|江宁|江浦|江阴|金湖|金坛|靖江|句容|昆山|溧水|溧阳|连云港|涟水|六合|南京|南通|沛县|邳县|启东|清江|如东|如皋|沙洲|射阳|沭阳|泗洪|泗阳|苏州|宿迁|睢宁|太仓|泰县|泰兴|泰州|铜山|无锡|吴江|吴县|武进|响水|新沂|兴化|盱眙|徐州|盐城|扬中|扬州|仪征|宜兴|镇江"); 
where[15]   = new comefrom("江西","|安福|安义|安远|波阳|崇仁|崇义|大余|德安|德兴|定南|东乡|都昌|分宜|丰城|奉新|抚州|赣县|赣州|高安|广昌|广丰|贵溪|横峰|湖口|会昌|吉安|吉水|金溪|进贤|井冈山|景德镇|靖安|九江|乐安|乐平|黎川|莲花|临川|龙南|南昌|南城|南丰|南康|宁都|宁冈|彭泽|萍乡|铅山|清江|全南|瑞昌|瑞金|上高|上饶|上犹|石城|遂川|泰和|铜鼓|万安|万年|万载|武宁|婺源|峡江|新干|新建|新余|信丰|兴国|星子|修永|寻乌|宜春|宜丰|宜黄|弋阳|鹰潭|永丰|永新|永修|于都|于干|余江|玉山|资溪"); 
where[16]   = new comefrom("山东","|安丘|滨县|滨州|博兴|仓山|曹县|昌乐|昌邑|长岛|长清|成武|茌平|单县|德州|定陶|东阿|东明|东平|东营|肥城|费县|福山|高都|高密|高青|高唐|冠县|广饶|海阳|荷泽|桓台|黄县|惠民|即墨|济南|济宁|济阳|嘉祥|胶南|胶县|金乡|莒南|巨野|鄄城|垦利|莱芜|莱西|莱阳|崂山|乐陵|历城|利津|梁山|聊城|临清|临朐|临沭|临沂|临邑|陵县|蒙阴|牟平|宁津|宁阳|蓬莱|平度|平邑|平阴|平原|栖霞|齐河|青岛|庆云|曲阜|日照|荣成|乳山|商河|寿光|泗水|泰安|郯城|滕县|威海|微山|潍坊|潍县|文登|汶上|无棣|五莲|武城|夏津|莘县|新泰|新汶|烟台|兖州|阳谷|阳信|掖县|沂南|沂水|沂源|营县|鱼台|禹城|郓城|枣庄|沾化|章丘|招远|诸城|淄博|邹平|邹县"); 
where[17]   = new comefrom("河南","|安阳|宝丰|博爱|长葛|长垣|郸城|登封|邓县|范县|方城|封丘|扶沟|巩县|固始|光山|鹤壁|滑县|淮滨|淮阳|潢川|辉县|获嘉|汲县|济源|郏县|焦作|浚县|开封|兰考|林县|临汝|临颖|灵宝|卢氏|鲁山|鹿邑|栾川|罗山|洛宁|洛阳|漯河|孟津|孟县|泌阳|密县|民权|内黄|内乡|南乐|南阳|南召|宁陵|平顶山|平舆|濮阳|淇县|杞县|沁阳|清丰|确山|汝南|汝阳|三门峡|陕县|商城|商丘|商水|上蔡|社旗|沈丘|渑池|嵩县|睢县|遂平|台前|太康|汤阴|唐河|通许|桐柏|尉氏|温贺|武陟|舞阳|西华|西平|西峡|息县|淅川|夏邑|襄城|项城|新安|新蔡|新县|新乡|新野|新郑|信阳|修武|许昌|鄢县|延津|偃师|郾城|叶县|伊川|宜阳|义马|荥阳|永城|虞城|禹县|原阳|柘城|镇平|正阳|郑州|中牟|周口|驻马店"); 
where[18]   = new comefrom("湖北","|安陆|崇阳|大悟|鄂城|广济|汉川|汉阳|红安|黄陂|黄冈|黄梅|黄石|嘉鱼|监利|江陵|京山|荆门|罗川|麻城|蒲圻|蕲春|沙市|十堰|石首|通城|通山|武昌|武汉|浠水|咸宁|襄樊|孝感|新洲|阳新|宜昌|应城|应山|英山|云梦|钟祥");
where[19]   = new comefrom("湖南","|安化|安仁|安乡|保靖|茶陵|长沙|常德|常宁|郴县|郴州|辰溪|城步|慈利|大庸|道县|东安|洞口|凤凰|古丈|桂东|桂阳|汉寿|衡东|衡南|衡山|衡阳|洪江|花垣|华容|怀化|会同|吉首|嘉禾|江华|江永|津市|靖县|来阳|蓝山|泪罗|冷水江|澧县|醴陵|涟源|临澧|临武|临湘|零陵|酃县|浏阳|龙山|隆回|娄底|泸溪|麻阳|南县|宁乡|宁远|平江|祁东|祁阳|黔阳|汝城|桑植|邵东|邵阳|石门|双峰|双牌|绥宁|桃江|桃源|通道|望城|武冈|湘潭|湘乡|湘阴|新化|新晃|新宁|新邵|新田|溆浦|宜章|益阳|永顺|永兴|永州|攸县|沅江|沅陵|岳阳|芷江|株洲|资兴"); 
where[20]   = new comefrom("浙江","|安吉|苍南|长兴|常山|淳安|慈溪|岱山|德清|定海|东阳|洞头|奉化|富阳|海宁|海盐|杭州|湖州|黄岩|嘉善|嘉兴|建德|江山|椒江|金华|缙云|开化|兰溪|乐清|丽水|临安|临海|龙泉|宁波|宁海|瓯海|平湖|平阳|浦江|普陀|青田|庆无|衢州|瑞安|三门|上虞|绍兴|嵊四|嵊县|松阳|遂昌|泰顺|天台|桐庐|桐乡|温岭|温州|文成|武义|仙居|象山|萧山|新昌|义乌|鄞县|永康|永喜|余杭|余姚|玉环|云和|镇海|诸暨"); 
where[21]   = new comefrom("广西","|巴马|百色|北海|北流|宾阳|博白|苍悟|岑溪|崇左|大新|德保|东兰|都安|防城|凤山|扶绥|富川|恭城|灌阳|贵县|桂林|桂平|合浦|合山|河池|贺县|横县|环江|金秀|靖西|来宾|乐业|荔浦|临桂|灵川|灵山|凌云|柳城|柳江|柳州|龙胜|龙州|隆安|隆林|陆川|鹿寨|罗城|马山|蒙山|那坡|南丹|南宁|宁明|平果|平乐|平南|凭祥|浦北|钦州|全州|容县|融安|融水|三江|上林|上思|藤县|天等|天峨|田东|田林|田阳|梧州|武鸣|武宜|西林|象州|忻城|兴安|宜山|邕宁|永福|玉林|昭平|钟山|资源"); 
where[22]   = new comefrom("海南","|白沙|保亭|昌江|澄迈|儋县|定安|东方|海口|乐东|临高|陵水|琼海|琼山|琼中|屯昌|万宁|文昌|崖县"); 
where[23]   = new comefrom("四川","|阿坝|安县|安岳|巴塘|巴中|白玉|百沙|宝兴|北川|布拖|苍溪|长宁|成都|城口|崇庆|达县|大邑|大竹|丹巴|丹棱|道孚|稻城|得荣|德昌|德格|德阳|垫江|娥眉|峨边|丰都|奉节|涪陵|富顺|甘洛|甘孜|高县|古蔺|灌县|光元|广安|广汉|汉源|合江|黑水|红原|洪雅|华云|会东|会理|夹江|犍为|简阳|剑阁|江安|江油|金川|金口|金堂|金阳|井研|九龙|筠连|开江|开县|康定|来易|阆中|乐由|乐至|雷波|理塘|理县|梁平|邻水|隆昌|芦山|泸定|泸县|泸州|炉霍|马边|马尔康|茂汶|眉由|美姑|绵阳|绵竹|冕宁|名山|木里|沐川|内江|纳溪|南部|南川|南江|南坪|南溪|南允|宁南|彭水|彭县|彭由|蓬安|蓬溪|郫县|平昌|平武|屏由|蒲江|普格|琪县|黔江|青川|青神|邛崃|渠县|壤塘|仁寿|荣经|若尔盖|三台|色达|射洪|什邡|石棉|石渠|石柱|双流|松潘|遂宁|天全|通江|万县|万源|旺苍|威远|温江|汶川|巫山|巫溪|武隆|武胜|西昌|西阳|西允|喜德|乡城|小金|新都|新津|新龙|兴文|秀山|叙水|雅安|雅江|盐边|盐亭|盐源|仪陇|宜宾|宜汉|营山|岳池|越西|云阳|昭觉|中江|忠县|资阳|资中|梓潼"); 
where[24]   = new comefrom("贵州","|安龙|安顺|毕节|册亭|岑巩|长顺|赤水|从江|大方|丹寨|道真|德江|都匀|独山|凤冈|福泉|关岭|贵定|贵阳|赫章|黄平|惠水|剑河|江口|金沙|锦屏|开阳|凯里|雷山|黎平|荔波|六盘水|六枝|龙里|罗甸|麻江|湄潭|钠雍|盘县|平坝|平塘|普安|普定|黔西|清镇|晴龙|仁怀|榕江|三都|三穗|师阡|施秉|水城|思南|松桃|绥阳|台江|天柱|桐梓|铜仁|万山|望谟|威宁|瓮安|务川|息烽|习水|兴仁|兴义|修文|沿河|印江|余庆|玉屏|贞丰|镇宁|镇远|正安|织金|紫云|遵义"); 
where[25]   = new comefrom("云南","|安宁|保由|碧江|宾川|沧源|昌宁|呈贡|澄江|楚雄|大关|大理|大姚|德钦|峨山|洱源|凤庆|福贡|富民|富宁|富源|个旧|耿马|贡山|沽益|广南|河口|鹤庆|黑江|红河|华宁|华坪|会泽|建水|剑川|江城|江川|金平|晋宁|景东|景谷|景淇|开远|昆明|兰坪|澜沦|丽江|梁河|临沦|龙陵|陇川|泸水|泸西|鲁甸|陆良|禄丰|禄劝|路南|潞西|绿春|罗平|麻栗坡|马关|马龙|勐海|勐腊|蒙自|孟连|弥渡|弥勒|牟定|南华|南涧|宁蒗|屏边|普洱|巧家|丘北|曲靖|瑞丽|师宗|施甸|石屏|双柏|双江|思茅|嵩明|绥江|腾冲|通海|畹町|威信|巍山|维西|文山|武定|西畴|西盟|下关|祥云|新平|宣威|寻甸|盐津|砚山|漾濞|姚安|宜良|彝良|易门|盈江|永德|永富|永平|永仁|永善|永胜|玉溪|元江|元谋|元阳|云龙|云县|昭通|镇康|镇雄|镇沅|中甸");
where[26]   = new comefrom("西藏","|安多|昂仁|八宿|巴青|白朗|班戈|比如|边坝|波密|察雅|察隅|措美|措勤|错那|达孜|当雄|丁青|定结|定日|堆龙德庆|噶尔|改则|岗巴|革吉|工布江达|贡嘎|贡觉|吉隆|加查|嘉黎|江达|江孜|康马|拉萨|拉孜|朗县|浪卡子|类乌齐|林芝|林周|隆子|吕都|洛隆|洛扎|芒康|米林|墨脱|墨竹工卡|那曲|乃东|南木林|尼木|聂拉木|聂荣|普兰|穷结|曲水|曲松|仁布|日喀则|日上|萨嘎|萨迦|桑日|申扎|索县|谢通门|亚东|扎达|扎囊|仲巴|左贡"); 
where[27]   = new comefrom("陕西","|安康|安寨|白河|白水|宝鸡|彬县|长安|长武|成城|城固|淳化|丹凤|定边|凤县|凤翔|佛坪|浮风|府谷|富平|富县|甘泉|高陵|韩城|汉阴|汉中|合阳|横山|户县|华县|华阴|黄陵|黄龙|佳县|泾阳|靖边|岚皋|蓝田|礼泉|临潼|麟游|留坝|陇县|略阳|洛川|洛南|眉县|米脂|勉县|南郑|宁强|宁陕|平利|蒲城|岐山|千阳|乾县|清涧|人荔|三原|山阳|商南|商县|神木|石泉|绥德|太白|铜川|潼关|渭南|吴堡|吴旗|武功|西安|西乡|咸阳|兴平|旬阳|旬邑|延安|延长|延川|洋县|耀县|宜川|宜君|永寿|榆林|镇安|镇巴|镇坪|志丹|周至|子长|子洲|紫阳|柞水"); 
where[28]   = new comefrom("甘肃","|阿克塞|安西|成县|崇信|宕昌|迭部|定西|东乡|敦煌|甘谷|皋兰|高台|古浪|广河|合水|和政|华池|华亭|环县|徽县|会宁|积石山|金塔|泾川|景泰|靖远|静宁|酒泉|康乐|康县|兰州|礼县|两当|临潭|临洮|临夏|临泽|灵台|陇西|碌曲|玛曲|民乐|民勤|岷县|宁县|平凉|秦安|清水|庆阳|山丹|肃北|肃南|天水|天祝|通渭|渭源|文县|武都|武山|武威|西和|下河|永昌|永登|永靖|榆中|玉门|张家川|张掖|漳县|镇源|舟曲|庄浪|庄宁|卓尼"); 
where[29]   = new comefrom("宁夏","|固原|海原|贺兰|泾源|灵武|隆德|平罗|青铜峡|石嘴山|陶乐|同心|吴忠|西吉|盐池|银川|永宁|中宁|中卫"); 
where[30]   = new comefrom("青海","|班玛|称多|达日|大通|都兰|甘德|刚察|格尔木|共和|贵德|贵南|海晏|河南|互助|化隆|湟源|湟中|尖扎|久治|乐都|玛多|玛沁|门源|民和|囊谦|平安|祁连|曲麻菜|天峻|同德|同仁|乌兰|西宁|兴海|循化|玉树|杂多|泽库|治多"); 
where[31]   = new comefrom("新疆","|阿合奇|阿克苏|阿克陶|阿勒泰|阿图什|阿瓦提|巴楚|巴里坤|拜城|博湖|博乐|布尔津|策勒|察布察尔|昌吉|额敏|福海|阜康|富蕴|巩留|哈巴河|哈密|和布克赛尔|和静|和硕|和田|呼图壁|霍城|吉木乃|吉木萨尔|枷师|精河|柯平|克拉玛依|库车|库尔勒|奎屯|乐普湖|咯什|轮台|洛浦|玛纳斯|麦盖提|米泉|民丰|墨玉|木垒|尼勒克|皮山|奇台|青河|沙湾|沙雅|莎车|鄯善|石河子|疏附|疏勒|塔城|塔什库尔干|特克斯|吐鲁番|托克逊|托里|尉梨|温泉|温宿|乌鲁木齐|乌恰|乌什|乌苏|新和|新源|焉耆|叶城|伊宁|伊吾|英吉沙|于田|裕民|泽普|昭苏"); 
where[32]   = new comefrom("香港","香港"); 
where[33]   = new comefrom("澳门","澳门"); 
where[34]   = new comefrom("台湾","|台北市|桃园县市|台南县|东引岛|高雄市|新竹县|高雄县|马 祖|基隆市|苗栗县市|屏东县市|金 门|新竹市|台中县|花莲县市|台中市|彰化县市|台东县市|台南市|南投县市|绿 岛|台北县|云林县|兰 屿|宜兰县市|嘉义县市|澎湖县"); 
where[35]   = new comefrom("自填经度","自填经度"); 

var lunarInfo=new Array( 
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2, 
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977, 
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970, 
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950, 
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557, 
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0, 
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0, 
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6, 
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570, 
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0, 
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5, 
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930, 
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530, 
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45, 
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0, 
0x14b63); 


/***************************************************************************** 
                                      日期计算 
*****************************************************************************/ 


/***************************************************************************** 
                                      日期爻动 
*****************************************************************************/ 

function get_six_random_help_myth()
/*
神煞
寅午戌马在申，桃花在卯；
亥卯未马在巳，桃花在子；
申子辰马在寅，桃花在酉；
巳酉丑马在亥，桃花在午。

甲禄在寅，乙禄在卯，丙戊禄在巳，丁己禄在午，庚禄在申，辛禄在酉，壬禄在亥，癸禄在子。
 
贵人
甲戊兼牛羊，乙己 鼠猴乡，丙丁猪鸡位，壬癸兔蛇藏，庚辛逢虎马
*/
{
	var m = startinfo.gzDate.slice(1)
	var n = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
	var x = ["寅", "亥", "申", "巳", "寅", "亥", "申", "巳", "寅", "亥", "申", "巳"];
	var th = ["申","巳", "寅", "亥"]
	var tt = ["卯","子", "酉", "午"]
	var q = n.indexOf(m);
	var p = x[q]
	six_random_help_myth[0] = p
	six_random_help_myth[1] = tt[th.indexOf(p)]

	var l = ["寅", "卯", "巳", "午", "巳", "午", "申", "酉", "亥", "子"];
	var ll = startinfo.gzDate.slice(0,1);
	var o = h.indexOf(ll);
	six_random_help_myth[2] = l[o];

	var g = ["丑,未", "子,申", "酉,亥", "酉,亥", "丑,未", "子,申", "寅,午", "寅,午", "卯,巳", "卯,巳"];
	var k = h.indexOf(ll)
	six_random_help_myth[3] = g[k];
}
function get_six_random_myth()
/*
六神
甲乙起青龙.丙丁起朱雀.戊己起勾陈,庚辛起白虎.壬癸起玄武
*/
{
	var a = ["青龙","朱雀","勾陈","縢蛇","白虎","玄武"];
	var n = ["青龙","青龙","朱雀","朱雀","勾陈","縢蛇","白虎","白虎","玄武","玄武"];
	var m = startinfo.gzDate.slice(0,1)
	var b = h.indexOf(m);
	var c = a.indexOf(n[b])

	for(index = 0;index<randomtime;index++)
    {
        six_random_myth[randomtime - index] = a[(c+index)%6];
    }
}

function get_one_random()
/*
六爻的启动测试，取三次正反，0表示反面，1表示证明
000表示全阴X
111表示全阳O
010表示少阴
100表示少阴
001表示少阴
101表示少阳
011表示少阳
110表示少阳
将结果加合就得到了4种结果，0 1 2 3 
0 老阴 1 少阴 2 少阳 3 全阳
*/
{

    three_random[0]=Math.random(1)>=0.5?1:0;
    three_random[1]=Math.random(1)>=0.5?1:0;
    three_random[2]=Math.random(1)>=0.5?1:0;
    return  three_random[0] + three_random[1] + three_random[2];
    
}

function get_six_original_random()
/*
获取本卦六爻
*/
{

    for(index = 0;index<randomtime;index++)
    {
        six_random[randomtime - index] = get_one_random();
    }
}

function get_six_change_random()
/*
获得变卦六爻
老阴变少阳
老阳变少阴
*/
{
    for(index = 0;index<randomtime;index++)
    {
        if(oldnegativevalue == six_random[randomtime-index])
        {
            six_change_random[randomtime-index] = positivevalue
        }
        else if(oldpositivevalue == six_random[randomtime-index])
        {
            six_change_random[randomtime-index] = negativevalue
        }
        else
        {
            six_change_random[randomtime-index] = six_random[randomtime-index]
        }
        
    }
}

function get_empty_sixty_cycle(date)
/*
天干地支虚空表
输入："戊子"
得到："午""未"（array）
*/
{
	
    var skydate = date.slice(0,1);
    var earthdate = date.slice(1);
    var i = h.indexOf(skydate);
    var j = d.indexOf(earthdate);
    return sixtycycletable[(10-i+j)%12]+sixtycycletable[(10-i+j+1)%12];
}

function get_empty_date()
{
	six_random_empty[0] = get_empty_sixty_cycle(startinfo.gzYear);
	six_random_empty[1] = get_empty_sixty_cycle(startinfo.gzMonth);
	six_random_empty[2] = get_empty_sixty_cycle(startinfo.gzDate);
	six_random_empty[3] = get_empty_sixty_cycle(startinfo.gzTime);
}

var m = {
	yearDataCache: {},
	getDate: function(u) {
		var x = Math.ceil((u - new Date(1899, 1, 10)) / 86400000);
		var w = 1899;
		var s;
		var r;
		var q;
		var t;
		var v;
		for(; w < 2100 && x > 0; w++) {
			s = this.getYearDays(w);
			x -= s
		}
		x < 0 && (x += s, w--);
		q = w;
		r = this.getLeapMonth(q) || false;
		for(w = 1; w <= 12; w++) {
			s = this.getMonthDays(q, w);
			if(r === true) {
				r = false;
				w--;
				s = this.getLeapDays(q);
				if(x < s) {
					t = true
				}
			}
			if(r === w) {
				r = true
			}
			if(x < s) {
				v = s === 30;
				break
			}
			x -= s
		}
		return {
			lunarYear: q,
			lunarMonth: w,
			lunarDay: x + 1,
			isLeap: t,
			isBigMonth: v
		}
	},
	getYearDays: function(q) {
		var r;
		var t = this.yearDataCache;
		if(t[q]) {
			return t[q]
		}
		var s = 348;
		var u = j[q - 1899];
		for(r = 32768; r > 8; r >>= 1) {
			s += r & u ? 1 : 0
		}
		s += this.getLeapDays(q);
		t[q] = s;
		return s
	},
	getLeapDays: function(q) {
		return this.getLeapMonth(q) ? (j[q - 1899 + 1] & 15 === 15 ? 30 : 29) : 0
	},
	getLeapMonth: function(r) {
		var q = j[r - 1899] & 15;
		return q == 15 ? 0 : q
	},
	getMonthDays: function(r, q) {
		return(j[r - 1899] & (65536 >> q)) ? 30 : 29
	}
};
var b = function(u, r) {
	var v = o[u - 1900];
	var t = [];
	var s = 0;
	var q;
	for(; s < 30; s += 5) {
		q = (+("0x" + v.substr(s, 5))).toString();
		t.push(q.substr(0, 1));
		t.push(q.substr(1, 2));
		t.push(q.substr(3, 1));
		t.push(q.substr(4, 2))
	}
	return new Date(u, parseInt(r / 2, 10), t[r])
};

/*
从已知日期计算干支纪日的公式为：

　　G = 4C + [C / 4] + 5y + [y / 4] + [3 * (M + 1) / 5] + d - 3

　　Z = 8C + [C / 4] + 5y + [y / 4] + [3 * (M + 1) / 5] + d + 7 + i

其中 C 是世纪数减一，y 是年份后两位，M 是月份，d 是日数。1月和2月按上一年的13月和14月来算。奇数月i=0，偶数月i=6。G 除以10的余数是天干，Z 除以12的余数是地支。

计算时带[ ]的数表示取整。

例如：查2006年4月1日的干支日。将数值代入计算公式。

　　G =4*20 + [20 / 4] + 5*06 + [06 / 4] + [3 * (4 + 1) / 5] + 1 - 3 =197

　　　　除以10 余数为 7 ，天干的第7位是‘庚’。

　　Z =8*20 + [20 / 4] + 5*06 + [06 / 4] + [3 * (4 + 1) / 5] + 1 + 7 + 6 =213

　　　　除以12 余数为 9 ，地支的第9位是‘申’。

答案是：2006年4月1日的干支日是庚申日。
*/
var c = {
	calculate: function(q) {
		return h[q % 10] + d[q % 12]
	},
	getGzYear: function(r, s, q) {
		return this.calculate(s - 1900 + 36 - (q === s ? 0 : 1))
	},
	getGzMonth: function(q, r, s) {
		var t = b(r, q.getMonth() * 2);
		return this.calculate((r - 1900) * 12 + s + 12 - (q < t ? 1 : 0))
	},
	getGzDay: function(q) {
		return this.calculate(Math.ceil(q / 86400000 )+ 25567 + 10)
	},
	/*

     北京时间  			甲己 乙庚 丙辛 丁壬 戊癸  
	 子【水】 23----1 	甲子 丙子 戊子 庚子 壬子  
	 丑【土】 1----3 	乙丑 丁丑 己丑 辛丑 癸丑  
	 寅【木】 3----5 	丙寅 戊寅 庚寅 壬寅 甲寅  
	 卯【木】 5----7 	丁卯 己卯 辛卯 癸卯 乙卯  
	 辰【土】 7----9 	戊辰 庚辰 壬辰 甲辰 丙辰  
	 巳【火】 9----11 	己巳 辛巳 癸巳 乙巳 丁巳  
	 午【火】 11----13 	庚午 壬午 甲午 丙午 戊午  
	 未【土】 13----15 	辛未 癸未 乙未 丁未 己未  
	 申【金】 15----17 	壬申 甲申 丙申 戊申 庚申  
	 酉【金】 17----19 	癸酉 乙酉 丁酉 己酉 辛酉  
	 戌【土】 19----21 	甲戌 丙戌 戊戌 庚戌 壬戌  
	 亥【水】 21----23 	乙亥 丁亥 己亥 辛亥 癸亥
	*/
	getGzTime: function(q) {
		var dateh = Math.ceil(q / 86400000 + 25567 + 10)
		var v = dateh % 5;
		var hour = q.getHours();
		hour = Math.floor(hour/2 + 0.5) % 12
		return h[ (v*2+hour) % 10] + d[hour % 12]
	}
};

function lunar_f() 
/*
获得当前农历信息
*/
{
    var r = new Date();
	var w = r.getFullYear();
	var u = r.getMonth() + 1;
	var y = r.getDate();
	var v = (u - 1) * 2;
	var s = b(w, v);
	var q;
	var t = "";
	if(y != s.getDate()) {
		q = b(w, v + 1);
		if(y == q.getDate()) {
			t = l[v + 1]
		}
	} else {
		t = l[v]
	}
	var x = m.getDate(r);
	return {
		Hours:r.getHours(),
		Time:r.getHours(),
		Date:r.getDate(),
		Month:r.getMonth()+1,
		Year:r.getFullYear(),
		animal: p[(x.lunarYear - 4) % 12],
		gzTime: c.getGzTime(r),
		gzDate: c.getGzDay(r),
		gzMonth: c.getGzMonth(r, w, u),
		gzYear: c.getGzYear(r, w, x.lunarYear),
		lunarYear: x.lunarYear,
		lunarMonth: x.lunarMonth,
		lunarDate: x.lunarDay,
		lMonth: (x.isLeap ? "闰" : "") + n[x.lunarMonth - 1],
		lDate: x.lunarDay % 10 == 0 ? ["初十", "二十", "三十"][x.lunarDay / 10 - 1] : k[parseInt(x.lunarDay / 10, 10)] + g[parseInt(x.lunarDay % 10, 10)],
		term: t,
		isBigMonth: x.isBigMonth,
		oDate: r,
		cnDay: "日一二三四五六七".charAt(r.getDay())
	}
};

function get_six_random_date()
{
	six_random_date[0] = "公历：" + startinfo.Year + " " + startinfo.Month + " " + startinfo.Date + " " + startinfo.Hours + ":" + startinfo.Time 
	six_random_date[1] = "农历：" + startinfo.lunarYear + " " + startinfo.lunarMonth + " " + startinfo.lunarDate
	six_random_date[2] = "四柱：" + startinfo.gzYear + " " + startinfo.gzMonth + " " + startinfo.gzDate + " " + startinfo.gzTime 
}

function get_random_name()
{
	six_random_date[3] = "旬空：" + six_random_empty[0] + " " + six_random_empty[1] + " " + six_random_empty[2] + " " + six_random_empty[3] 
	six_random_date[4] = "神煞：" + "驿马-" + six_random_help_myth[0] + " 桃花-" + six_random_help_myth[1] + " 日禄-" + six_random_help_myth[2] + " 贵人-" + six_random_help_myth[3] 
	var ooup=oodown=ocup=ocdown="";
	for(index = 0;index<randomtime;index++)
    {
		if(oldnegativevalue==six_random[index+1])
		{
			if(index<randomtime/2)
			{
				ooup=ooup+"0"
				ocup=ocup+"1"
			}
			else{
				oodown=oodown+"0"
				ocdown=ocdown+"1"
			}
			
		}
		else if(oldpositivevalue==six_random[index+1])
		{
			if(index<randomtime/2)
			{
				ooup=ooup+"1"
				ocup=ocup+"0"
			}
			else{
				oodown=oodown+"1"
				ocdown=ocdown+"0"
			}
		}
		else if(positivevalue==six_random[index+1])
		{
			if(index<randomtime/2)
			{
				ooup=ooup+"1"
				ocup=ocup+"1"
			}
			else{
				oodown=oodown+"1"
				ocdown=ocdown+"1"
			}
		}
		else if(negativevalue==six_random[index+1])
		{
			if(index<randomtime/2)
			{
				ooup=ooup+"0"
				ocup=ocup+"0"
			}
			else{
				oodown=oodown+"0"
				ocdown=ocdown+"0"
			}
		}
	}
	six_random_date[5] = ooup+":"+oodown
	six_random_date[6] = ocup+":"+ocdown
	six_random_date[7] = six_random_NaJia["000000"];
}

function get_random_draw()
{
	console.log(six_random_date[0]);
	console.log(six_random_date[1]);
	console.log(six_random_date[2]);
	console.log(six_random_date[3]);
	console.log(six_random_date[4]);
	//console.log(six_random_date[5]);
	//console.log(six_random_date[6]);
	console.log(six_random_date[7].name);
	var o = ["","上爻","五爻","四爻","三爻","二爻","初爻"]

	for(index = 0;index<randomtime;index++)
    {
		six_random_draw[randomtime-index] = six_random_myth[randomtime-index]+":"+o[randomtime-index]+" ";
		if(oldnegativevalue==six_random[randomtime-index])
		{
			six_random_draw[randomtime-index] = six_random_draw[randomtime-index] + negativedraw +" "+ negativechangedraw +" "
		}
		else if(oldpositivevalue==six_random[randomtime-index])
		{
			six_random_draw[randomtime-index] = six_random_draw[randomtime-index] + positivedraw +" "+ positivechangedraw +" "
		}
		else if(positivevalue==six_random[randomtime-index])
		{
			six_random_draw[randomtime-index] = six_random_draw[randomtime-index] + positivedraw +" "+ nonechangedraw +" "
		}
		else if(negativevalue==six_random[randomtime-index])
		{
			six_random_draw[randomtime-index] = six_random_draw[randomtime-index] + negativedraw +" "+ nonechangedraw +" "
		}
	}

	for(index = 0;index<randomtime;index++)
    {
		if(oldnegativevalue==six_change_random[randomtime-index])
		{
			six_random_draw[randomtime-index] = six_random_draw[randomtime-index] + negativedraw
		}
		else if(oldpositivevalue==six_change_random[randomtime-index])
		{
			six_random_draw[randomtime-index] = six_random_draw[randomtime-index] + positivedraw
		}
		else if(positivevalue==six_change_random[randomtime-index])
		{
			six_random_draw[randomtime-index] = six_random_draw[randomtime-index] + positivedraw
		}
		else if(negativevalue==six_change_random[randomtime-index])
		{
			six_random_draw[randomtime-index] = six_random_draw[randomtime-index] + negativedraw
		}
	}

	for(index = 0;index<randomtime;index++)
    {
		console.log(six_random_draw[index+1]);
	}
	for(index = 0;index<randomtime;index++)
    {
		var t = index+1
		console.log(six_random_date[7][t]);
	}
}

function get_six_random()
/*
获取本卦，变卦，时间，天干，地支，用神，旬空，六亲
*/
{
	startinfo = lunar_f();
	get_six_random_date();
    //本卦爻变
    get_six_original_random();
    //变卦
    get_six_change_random();
    //伏神纳甲世应
    //旬空
    get_empty_date();
    //神煞
	get_six_random_help_myth()
    //六神
	get_six_random_myth()
	//装卦
	get_random_name()
	//调试画卦
	get_random_draw();
	return {
		info:startinfo,
		six_random_date:six_random_date,
		six_random:six_random,
		six_change_random:six_change_random,
		six_random_empty:six_random_empty,
		six_random_myth:six_random_myth,
		six_random_help_myth:six_random_help_myth,
	}
	
}

function lunarsix()
/*
六爻发动
*/
{
	//起爻求事内容
	//来客生辰
	//取爻
	get_six_random();
	//存盘序列化
	//绘图展示
}