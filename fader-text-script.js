/*  
function showRecommendation() {
	var words = new Array();
		words[0] = "“Your deepest presence is in your every small contracting and expanding. The two as beautifully balanced and coordinated as birdwings.” -Rumi";
		words[1] = "“What is this precious love and laughter budding in our hearts? It is the glorious sound of a soul waking up.” ~Hafiz";
		words[2] = "“No matter where you go... there you are!” -Buckaroo Banzai";
		words[3] = "“Zaphod's... just this guy, you know?” -Douglas Adams' The Hitchhiker's Guide To The Galaxy";
	/*  var words = ["“Your deepest presence is in your every small contracting and expanding. The two as beautifully balanced and coordinated as birdwings.” -Rumi", "“What is this precious love and laughter budding in our hearts? It is the glorious sound of a soul waking up.” ~Hafiz", "“No matter where you go... there you are!” -Buckaroo Banzai", "“Zaphod's... just this guy, you know?” -Douglas Adams' The Hitchhiker's Guide To The Galaxy"];
	var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
	var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];  */
/*  
	var rand = Math.floor(Math.random() * words.length);
	/*  var rand2 = Math.floor(Math.random() * words2.length);
	var rand3 = Math.floor(Math.random() * words3.length);  */
/*  
	var recommend = words[rand];  /* + " " + words2[rand2] + " " + words3[rand3]  */
/*  
	var recommendElement = document.getElementById("recommend");
	recommendElement.innerHTML = recommend;
}  */
/*  window.onload = showRecommendation;  */
/*  
$(document).ready(function() {
	
		$('#recommend').showRecommendation
		/*  .fadeIn('slow').delay(5000).fadeOut('slow');  */
/*  
});  */

$(document).ready(function () {
    var words = new Array();
    words[0] = "“Your deepest presence is in your every small contracting and expanding. The two as beautifully balanced and coordinated as birdwings.” -Rumi";
    words[1] = "“What is this precious love and laughter budding in our hearts? It is the glorious sound of a soul waking up.” ~Hafiz";
    words[2] = "“No matter where you go... there you are!” -Buckaroo Banzai";
    words[3] = "“Zaphod's... just this guy, you know?” -Douglas Adams' The Hitchhiker's Guide To The Galaxy";
    words[4] = "“Monicka is just the bestest licensed massage therapist, ever!” — a very smart, satisfied customer";

    function changeRecommendQuote() {

        var rand = Math.floor(Math.random() * words.length);

        var recommendElement = document.getElementById("recommendation");

        recommendElement.innerHTML = words[rand];
        
        $('#recommendation').fadeIn(1500).delay(4000).fadeOut(1500);

    }
    
    changeRecommendQuote()
    
    setInterval(changeRecommendQuote,7250)

});