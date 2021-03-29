
    var pad = function one(number, length) {
        var str = '' + number;
        while (str.length < length) {str = '0' + str;}
        return str;
    };
    

    var formatTime = function(time) {
        var min = parseInt(time / 60000),
            sec = parseInt(time / 1000) - (min * 60),
            hundredths = pad(time - (sec * 1000) - (min * 60000), 2);
        //return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
        return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2);
    };

    var countdownTimer = function(minutes, funct) {

        //add a second on 1000 for delay
        if (minutes) {
            var startTime = (minutes * 60000) + 1000;
        }

        //console.info('Starttime: ',startTime);
        var endtime = new Date().getTime() + startTime;

        var handleTime = function four() {

            //console.log('\nFunc running...\n');
            var now = new Date().getTime();
            var countdown = formatTime(endtime - now);
            //console.info('countdown: ', countdown);

            //check for el
            if (jQuery('.timer').length) {
                jQuery('.timer')[0].innerHTML = countdown;
            }

            //check if the time has counted down
            if (endtime - now <= 0) {
                //clear timeR
                clearInterval(timeR);
                //run callback
                funct();
            }
        };

        //every second run the handle time function
        var timeR = setInterval(handleTime, 1000); //1 second

    };

    var stopTimer = function five(el, min, fn){
        el.click(function clickr(){
            clearInterval(timeR);
            countdownTimer(min, fn);
        });
    };

    stopTimer(jQuery('button'), 5, functs);    

    countdownTimer(5, functs); 
    
    var functs = function(){console.log('funct')};




