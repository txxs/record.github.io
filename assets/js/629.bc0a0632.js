(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{1020:function(n,a,e){"use strict";e.r(a);var t=e(13),l=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v('Calendar.getInstance() 中所获得的实例就是一个 "GreogrianCalendar" 对象(与通过 new GregorianCalendar() 获得的结果一致)。')]),n._v(" "),e("p",[n._v("#Calendar 与 Date 的转换\nCalendar calendar = Calendar.getInstance();\n// 从一个 Calendar 对象中获取 Date 对象\nDate date = calendar.getTime();\n// 将 Date 对象反应到一个 Calendar 对象中，\n// Calendar/GregorianCalendar 没有构造函数可以接受 Date 对象\n// 所以我们必需先获得一个实例，然后设置 Date 对象\ncalendar.setTime(date);\n#注意的事项：\n##1. Calendar 的 set() 方法")]),n._v(" "),e("p",[n._v('set(int field, int value) - 是用来设置"年/月/日/小时/分钟/秒/微秒"等值')]),n._v(" "),e("p",[n._v("field 的定义在 Calendar 中")]),n._v(" "),e("p",[n._v("set(int year, int month, int day, int hour, int minute, int second) 但没有")]),n._v(" "),e("p",[n._v("set(int year, int month, int day, int hour, int minute, int second, int millisecond) 前面 set(int,int,int,int,int,int) 方法不会自动将 MilliSecond 清为 0。")]),n._v(" "),e("p",[n._v("另外，月份的起始值为０而不是１，所以要设置八月时，我们用７而不是8。")]),n._v(" "),e("p",[n._v("calendar.set(Calendar.MONTH, 7);")]),n._v(" "),e("p",[n._v("我们通常需要在程序逻辑中将它清为 0， Calendar 不是马上就刷新其内部的记录")]),n._v(" "),e("p",[n._v("在 Calendar 的方法中，get() 和 add() 会让 Calendar 立刻刷新。Set() 的这个特性会给我们的开发带来一些意想不到的结果。\n##add() 与 roll() 的区别")]),n._v(" "),e("p",[n._v("add() 的功能非常强大，add 可以对 Calendar 的字段进行计算。如果需要减去值，那么使用负数值就可以了，如 add(field, -value)。")]),n._v(" "),e("p",[n._v("add() 有两条规则：")]),n._v(" "),e("p",[n._v("当被修改的字段超出它可以的范围时，那么比它大的字段会自动修正。如：\nCalendar cal1 = Calendar.getInstance();\ncal1.set(2000, 7, 31, 0, 0 , 0); //2000-8-31\ncal1.add(Calendar.MONTH, 1); //2000-9-31 => 2000-10-1，对吗？\nSystem.out.println(cal1.getTime()); //结果是 2000-9-30")]),n._v(" "),e("p",[n._v("另一个规则是，如果比它小的字段是不可变的（由 Calendar 的实现类决定），那么该小字段会修正到变化最小的值。")]),n._v(" "),e("p",[n._v("以上面的例子，9-31 就会变成 9-30，因为变化最小。")]),n._v(" "),e("p",[n._v("Roll() 的规则只有一条：\n当被修改的字段超出它可以的范围时，那么比它大的字段不会被修正。如：")]),n._v(" "),e("p",[n._v("Calendar cal1 = Calendar.getInstance();\ncal1.set(1999, 5, 6, 0, 0, 0); //1999-6-6, 周日\ncal1.roll(Calendar.WEEK_OF_MONTH, -1); //1999-6-1, 周二\ncal1.set(1999, 5, 6, 0, 0, 0); //1999-6-6, 周日\ncal1.add(Calendar.WEEK_OF_MONTH, -1); //1999-5-30, 周日\nWEEK_OF_MONTH 比 MONTH 字段小，所以 roll 不能修正 MONTH 字段。")])])}),[],!1,null,null,null);a.default=l.exports}}]);