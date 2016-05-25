var process_loop = {
    paper: null,
    init: function(bg,txt,process,color) {
        //初始化Raphael画布 
        this.paper = Raphael(bg, 54, 54);
        //把底图先画上去 
        // this.paper.image("/uploads/150201/progressBg.png", 0, 0, 74, 74);
        //进度比例，0到1，在本例中我们画65% 
        //需要注意，下面的算法不支持画100%，要按99.99%来画 
        var percent = process,
            drawPercent = percent >= 1 ? 0.9999 : percent;
        //开始计算各点的位置，见后图 
        //r1是内圆半径，r2是外圆半径 
        var r1 = 20,
            r2 = 24,
            PI = Math.PI,
            p1 = {
                x: 27,
                y: 51
            },
            p4 = {
                x: p1.x,
                y: p1.y - r2 + r1
            },
            p2 = {
                x: p1.x + r2 * Math.sin(2 * PI * (1 - drawPercent)),
                y: p1.y - r2 + r2 * Math.cos(2 * PI * (1 - drawPercent))
            },
            p3 = {
                x: p4.x + r1 * Math.sin(2 * PI * (1 - drawPercent)),
                y: p4.y - r1 + r1 * Math.cos(2 * PI * (1 - drawPercent))
            },
            path = [
                'M', p1.x, ' ', p1.y,
                'A', r2, ' ', r2, ' 0 ', percent > 0.5 ? 1 : 0, ' 1 ', p2.x, ' ', p2.y,
                'L', p3.x, ' ', p3.y,
                'A', r1, ' ', r1, ' 0 ', percent > 0.5 ? 1 : 0, ' 0 ', p4.x, ' ', p4.y,
                'Z'
            ].join('');
        //用path方法画图形，由两段圆弧和两条直线组成，画弧线的算法见后 www.it165.net
        this.paper.path(path)
            //填充渐变色，从#3f0b3f到#ff66ff 
            .attr({
                "stroke-width": 0.5,
                "stroke": "#8bd8ff",
                "fill": color
            });
        //显示进度文字 
        $(txt).text(Math.round(percent * 100) + "%");
    }

};