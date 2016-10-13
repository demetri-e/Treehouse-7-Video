//Highlight Text 

		var pop = Popcorn("#video");

		var wordTimes = {
		    "w1": { start: 0.1, end: 7.53 },
		    "w2": { start: 7.53, end: 13 },
		    "w3": { start: 13, end: 17 },
		    "w4": { start: 18, end: 23 },
		    "w5": { start: 23, end: 32 },
		    "w6": { start: 32, end: 39 },
		    "w7": { start: 39, end: 42 },
		    "w8": { start: 42, end: 48 },
		    "w9": { start: 48, end: 53 },
		    "w10": { start: 53, end: 57 },
		    "w11": { start: 57, end: 59 }
		};

		$.each(wordTimes, function(id, time) {
		     pop.footnote({
		        start: time.start,
		        end: time.end,
		        text: '',
		        target: id,
		        effect: "applyclass",
		        applyclass: "selected"
		    });
		});

		pop.play();

		$('.word').click(function() {
		    var audio = $('#video');
		    audio[0].currentTime = parseFloat($(this).data('start'), 10);
		    audio[0].play();
		});