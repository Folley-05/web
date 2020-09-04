
    function Color(red, green, blue){
        this.red=red;
        this.green=green;
        this.blue=blue;
    } 

    var rand=function (min, max, integer) {
        if (!integer) {
            return Math.random() * (max - min) + min;
        }
        else {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    var randomColor=function (){
        var red=rand(0, 255, true);
        var green=rand(0, 255, true);
        var blue=rand(0, 255, true);
        var color=new Color(red, green, blue);
        return color;
    }

    var randomColor2=function (color, a){
        var red=rand(color.red-a, parseInt(color.red)+parseInt(a) , true);
        var green=rand(color.green-a, parseInt(color.green)+parseInt(a), true);
        var blue=rand(color.blue-a, parseInt(color.blue)+parseInt(a), true);
        var color2=new Color(red, green, blue);
        return color2;
    }


export {rand, randomColor, randomColor2};