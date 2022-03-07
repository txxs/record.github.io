(window.webpackJsonp=window.webpackJsonp||[]).push([[668],{1059:function(n,s,a){"use strict";a.r(s);var t=a(13),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"_10-1-死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-死锁"}},[n._v("#")]),n._v(" 10.1 死锁")]),n._v(" "),a("p",[n._v("哲学家问题")]),n._v(" "),a("p",[n._v("有环")]),n._v(" "),a("p",[n._v("A等B，B等A")]),n._v(" "),a("p",[n._v("数据库往往可以检测和解决死锁//TODO")]),n._v(" "),a("p",[n._v("JVM不行，一旦死锁只有停止重启。")]),n._v(" "),a("p",[n._v("下面分别介绍了几种典型的死锁情况：")]),n._v(" "),a("h4",{attrs:{id:"_10-1-1-lock-ordering-deadlocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-1-lock-ordering-deadlocks"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#1011-lock-ordering-deadlocks"}}),n._v("10.1.1 Lock ordering Deadlocks")]),n._v(" "),a("p",[n._v("下面是一个经典的锁顺序死锁：两个线程用不同的顺序来获得相同的锁，"),a("strong",[n._v("如果按照锁的请求顺序来请求锁，就不会发生这种循环依赖的情况。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("public class LeftRightDeadlock {\n    private final Object left = new Object();\n    private final Object right = new Object();\n\n    public void leftRight() {\n        synchronized (left) {\n            synchronized (right) {\n                doSomething();\n            }\n        }\n    }\n\n    public void rightLeft() {\n        synchronized (right) {\n            synchronized (left) {\n                doSomethingElse();\n            }\n        }\n    }\n\n    void doSomething() {\n    }\n\n    void doSomethingElse() {\n    }\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br")])]),a("h4",{attrs:{id:"_10-1-1-dynamic-lock-order-deadlocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-1-dynamic-lock-order-deadlocks"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#1011-dynamic-lock-order-deadlocks"}}),n._v("10.1.1 Dynamic Lock Order Deadlocks")]),n._v(" "),a("p",[n._v("下面的转账例子，如果一个线程X向Y转，而另外一个线程Y向X也转，那么就会发生死锁。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("public class DynamicOrderDeadlock {\n    // Warning: deadlock-prone!\n    public static void transferMoney(Account fromAccount,\n                                     Account toAccount,\n                                     DollarAmount amount)\n            throws InsufficientFundsException {\n        synchronized (fromAccount) {\n            synchronized (toAccount) {\n                if (fromAccount.getBalance().compareTo(amount) < 0)\n                    throw new InsufficientFundsException();\n                else {\n                    fromAccount.debit(amount);\n                    toAccount.credit(amount);\n                }\n            }\n        }\n    }\n\n    static class DollarAmount implements Comparable<DollarAmount> {\n        // Needs implementation\n\n        public DollarAmount(int amount) {\n        }\n\n        public DollarAmount add(DollarAmount d) {\n            return null;\n        }\n\n        public DollarAmount subtract(DollarAmount d) {\n            return null;\n        }\n\n        public int compareTo(DollarAmount dollarAmount) {\n            return 0;\n        }\n    }\n\n    static class Account {\n        private DollarAmount balance;\n        private final int acctNo;\n        private static final AtomicInteger sequence = new AtomicInteger();\n\n        public Account() {\n            acctNo = sequence.incrementAndGet();\n        }\n\n        void debit(DollarAmount d) {\n            balance = balance.subtract(d);\n        }\n\n        void credit(DollarAmount d) {\n            balance = balance.add(d);\n        }\n\n        DollarAmount getBalance() {\n            return balance;\n        }\n\n        int getAcctNo() {\n            return acctNo;\n        }\n    }\n\n    static class InsufficientFundsException extends Exception {\n    }\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br")])]),a("p",[n._v("解决办法还是顺序话锁，考虑针对两种情况取hashcode然后判断if-else里面决定锁顺序。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Helper {\n            public void transfer() throws InsufficientFundsException {\n                if (fromAcct.getBalance().compareTo(amount) < 0)\n                    throw new InsufficientFundsException();\n                else {\n                    fromAcct.debit(amount);\n                    toAcct.credit(amount);\n                }\n            }\n        }\n        int fromHash = System.identityHashCode(fromAcct);\n        int toHash = System.identityHashCode(toAcct);\n\n        if (fromHash < toHash) {\n            synchronized (fromAcct) {\n                synchronized (toAcct) {\n                    new Helper().transfer();\n                }\n            }\n        } else if (fromHash > toHash) {\n            synchronized (toAcct) {\n                synchronized (fromAcct) {\n                    new Helper().transfer();\n                }\n            }\n        } else {\n            synchronized (tieLock) {\n                synchronized (fromAcct) {\n                    synchronized (toAcct) {\n                        new Helper().transfer();\n                    }\n                }\n            }\n        }\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br")])]),a("h4",{attrs:{id:"_10-1-3-在协作对象之间发生死锁deadlocks-between-cooperating-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-3-在协作对象之间发生死锁deadlocks-between-cooperating-objects"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#1013-%E5%9C%A8%E5%8D%8F%E4%BD%9C%E5%AF%B9%E8%B1%A1%E4%B9%8B%E9%97%B4%E5%8F%91%E7%94%9F%E6%AD%BB%E9%94%81deadlocks-between-cooperating-objects"}}),n._v("10.1.3 在协作对象之间发生死锁Deadlocks Between Cooperating Objects")]),n._v(" "),a("p",[n._v("下面的例子setLocation和getImage都会获取两把锁，会存在两个线程按照不同的顺序获取锁的情况。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('public class CooperatingDeadlock {\n    // Warning: deadlock-prone!\n    class Taxi {\n        @GuardedBy("this") private Point location, destination;\n        private final Dispatcher dispatcher;\n\n        public Taxi(Dispatcher dispatcher) {\n            this.dispatcher = dispatcher;\n        }\n\n        public synchronized Point getLocation() {\n            return location;\n        }\n\n        public synchronized void setLocation(Point location) {\n            this.location = location;\n            if (location.equals(destination))\n                dispatcher.notifyAvailable(this);\n        }\n\n        public synchronized Point getDestination() {\n            return destination;\n        }\n\n        public synchronized void setDestination(Point destination) {\n            this.destination = destination;\n        }\n    }\n\n    class Dispatcher {\n        @GuardedBy("this") private final Set<Taxi> taxis;\n        @GuardedBy("this") private final Set<Taxi> availableTaxis;\n\n        public Dispatcher() {\n            taxis = new HashSet<Taxi>();\n            availableTaxis = new HashSet<Taxi>();\n        }\n\n        public synchronized void notifyAvailable(Taxi taxi) {\n            availableTaxis.add(taxi);\n        }\n\n        public synchronized Image getImage() {\n            Image image = new Image();\n            for (Taxi t : taxis)\n                image.drawMarker(t.getLocation());\n            return image;\n        }\n    }\n\n    class Image {\n        public void drawMarker(Point p) {\n        }\n    }\n}\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br")])]),a("h4",{attrs:{id:"_10-1-4-开放调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-4-开放调用"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#1014-%E5%BC%80%E6%94%BE%E8%B0%83%E7%94%A8"}}),n._v("10.1.4 开放调用")]),n._v(" "),a("p",[n._v("减小锁的力度，锁不嵌套。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('class CooperatingNoDeadlock {\n    @ThreadSafe\n    class Taxi {\n        @GuardedBy("this") private Point location, destination;\n        private final Dispatcher dispatcher;\n\n        public Taxi(Dispatcher dispatcher) {\n            this.dispatcher = dispatcher;\n        }\n\n        public synchronized Point getLocation() {\n            return location;\n        }\n\n        public synchronized void setLocation(Point location) {\n            boolean reachedDestination;\n            synchronized (this) {\n                this.location = location;\n                reachedDestination = location.equals(destination);\n            }\n            if (reachedDestination)\n                dispatcher.notifyAvailable(this);\n        }\n\n        public synchronized Point getDestination() {\n            return destination;\n        }\n\n        public synchronized void setDestination(Point destination) {\n            this.destination = destination;\n        }\n    }\n\n    @ThreadSafe\n    class Dispatcher {\n        @GuardedBy("this") private final Set<Taxi> taxis;\n        @GuardedBy("this") private final Set<Taxi> availableTaxis;\n\n        public Dispatcher() {\n            taxis = new HashSet<Taxi>();\n            availableTaxis = new HashSet<Taxi>();\n        }\n\n        public synchronized void notifyAvailable(Taxi taxi) {\n            availableTaxis.add(taxi);\n        }\n\n        public Image getImage() {\n            Set<Taxi> copy;\n            synchronized (this) {\n                copy = new HashSet<Taxi>(taxis);\n            }\n            Image image = new Image();\n            for (Taxi t : copy)\n                image.drawMarker(t.getLocation());\n            return image;\n        }\n    }\n\n    class Image {\n        public void drawMarker(Point p) {\n        }\n    }\n\n}\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br")])]),a("h4",{attrs:{id:"_1-0-15-资源死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-15-资源死锁"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#1015-%E8%B5%84%E6%BA%90%E6%AD%BB%E9%94%81"}}),n._v("1.0.15 资源死锁")]),n._v(" "),a("ul",[a("li",[n._v("数据库连接池，A持有数据库D1连接，等待与D2连接，B持有D2的连接，等待与D1连接。")]),n._v(" "),a("li",[n._v("线程饥饿死锁，如8.1.1小节的例子。")])]),n._v(" "),a("h3",{attrs:{id:"_10-2-死锁的避免与诊断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-死锁的避免与诊断"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#102-%E6%AD%BB%E9%94%81%E7%9A%84%E9%81%BF%E5%85%8D%E4%B8%8E%E8%AF%8A%E6%96%AD"}}),n._v("10.2 死锁的避免与诊断")]),n._v(" "),a("h4",{attrs:{id:"_10-2-1-支持定时的锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-1-支持定时的锁"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#1021-%E6%94%AF%E6%8C%81%E5%AE%9A%E6%97%B6%E7%9A%84%E9%94%81"}}),n._v("10.2.1 支持定时的锁")]),n._v(" "),a("p",[n._v("tryLock")]),n._v(" "),a("h4",{attrs:{id:"_10-2-2-kill-3-发信号给jvm-dump线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-2-kill-3-发信号给jvm-dump线程"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#1022-kill--3-%E5%8F%91%E4%BF%A1%E5%8F%B7%E7%BB%99jvm-dump%E7%BA%BF%E7%A8%8B"}}),n._v("10.2.2 kill -3 发信号给JVM dump线程")]),n._v(" "),a("h3",{attrs:{id:"_10-3-其他活跃性危险"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-其他活跃性危险"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#103-%E5%85%B6%E4%BB%96%E6%B4%BB%E8%B7%83%E6%80%A7%E5%8D%B1%E9%99%A9"}}),n._v("10.3 其他活跃性危险")]),n._v(" "),a("h4",{attrs:{id:"_10-3-1-饥饿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-1-饥饿"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#1031-%E9%A5%A5%E9%A5%BF"}}),n._v("10.3.1 饥饿")]),n._v(" "),a("h4",{attrs:{id:"_10-3-3-活锁livelock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-3-活锁livelock"}},[n._v("#")]),n._v(" "),a("a",{attrs:{href:"#1033-%E6%B4%BB%E9%94%81livelock"}}),n._v("10.3.3 活锁Livelock")]),n._v(" "),a("p",[n._v("他不会阻塞线程，但是也不能继续执行，因为线程在不断的重复执行相同的操作，而且总会失败。")]),n._v(" "),a("p",[n._v("例如处理事务消，回滚后再次重新把任务放在队头。")]),n._v(" "),a("p",[n._v("又例如发送数据包，都选择1s后重试，那么总会冲突，所以可以考虑一个随机数时间间隔。")])])}),[],!1,null,null,null);s.default=e.exports}}]);