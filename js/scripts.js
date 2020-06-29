$(document).ready(function(){
  showQuote();
  
  $("#requestquote").on("click", function()
  {
    showQuote();
  })
  
  function showQuote()
  {
    var quotes = ["We are what we repeatedly do. Excellence, therefore, is not an act but a habit. - Aristotle",
                  "The best way out is always through. - Robert Frost",
                  "Do not wait to strike till the iron is hot; but make it hot by striking. - William B. Sprague",
                  "Great spirits have always encountered violent opposition from mediocre minds. - Albert Einstein ",
                  "Whether you think you can or think you can’t, you’re right. - Henry Ford ",
                  "I know for sure that what we dwell on is who we become. - Oprah Winfrey ",
                  "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. - Michael Jordan ",
                  "You must be the change you want to see in the world. - Mahatma Gandhi  ",
                  "What you get by achieving your goals is not as important as what you become by achieving your goals. – Goethe ",
                  "You can get everything in life you want if you will just help enough other people get what they want. - Zig Ziglar ",
                  "Whatever you do will be insignificant, but it is very important that you do it. - Mahatma Gandhi ",
                  "Desire is the starting point of all achievement, not a hope, not a wish, but a keen pulsating desire which transcends everything. - Napoleon Hill ",
                  "Failure is the condiment that gives success its flavor. - Truman Capote ",
                  "Vision without action is daydream. Action without vision is nightmare. - Japanese Proverb",
                  "In any situation, the best thing you can do is the right thing; the next best thing you can do is the wrong thing; the worst thing you can do is nothing. - Theodore Roosevelt",
                  "If you keep saying things are going to be bad, you have a chance of being a prophet. - Isaac B. Singer ",
                  "Success consists of doing the common things of life uncommonly well.- Unknown ",
                  "Keep on going and the chances are you will stumble on something, perhaps when you are least expecting it. I have never heard of anyone stumbling on something sitting down. - Charles F. Kettering, Engineer and Inventor ",
                  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.- Mark Twain ",
                  "Losers visualize the penalties of failure. Winners visualize the rewards of success. - Unknown" ,
                  "Some succeed because they are destined. Some succeed because they are determined. - Unknown ",
                  "Experience is what you get when you don't get what you want. - Dan Stanford",
                  "Setting an example is not the main means of influencing others; it is the only means. - Albert Einstein ",
                  "A happy person is not a person in a certain set of circumstances, but rather a person with a certain set of attitudes. - Hugh Downs ",
                  "If you're going to be able to look back on something and laugh about it, you might as well laugh about it now. - Marie Osmond ",
                  "Remember that happiness is a way of travel, not a destination. - Roy Goodman ",
                  "If you want to test your memory, try to recall what you were worrying about one year ago today. - E. Joseph Cossman ",
                  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson ",
                  "We judge of man's wisdom by his hope. - Ralph Waldo Emerson",
                  "The best way to cheer yourself up is to try to cheer somebody else up. - Mark Twain ",
                  "Age is an issue of mind over matter. If you don't mind, it doesn't matter. - Mark Twain ",
                  "Whenever you find yourself on the side of the majority, it's time to pause and reflect. - Mark Twain ",
                  "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great. - Mark Twain ",
                  "The surest way not to fail is to determine to succeed. - Richard B. Sheridan ",
                  "Take the first step in faith. You don't have to see the whole staircase, just take the first step. - Dr. Martin Luther King Jr. ",
                  "Act or accept. - Unanonymous ",
                  "Many great ideas go unexecuted, and many great executioners are without ideas. One without the other is worthless. - Tim Blixseth",
                  "The world is more malleable than you think and it's waiting for you to hammer it into shape. - Bono ",
                  "Sometimes you just got to give yourself what you wish someone else would give you. - Dr Phil ",
                  "Motivation is a fire from within. If someone else tries to light that fire under you, chances are it will burn very briefly. - Stephen R. Covey ",
                  "People become really quite remarkable when they start thinking that they can do things. When they believe in themselves they have the first secret of success. - Norman Vincent Peale",
                  "Whenever you find whole world against you just turn around and lead the world. - Anonymous ",
                  "Being defeated is only a temporary condition; giving up is what makes it permanent. - Marilyn vos Savant, Author and Advice Columnist",
                  "I can't understand why people are frightened by new ideas. I'm frightened by old ones. - John Cage ",
                  "Setting an example is not the main means of influencing others; it is the only means. - Albert Einstein ",
                  "The difference between ordinary and extraordinary is that little extra. - Unknown ",
                  "The best way to predict the future is to create it. - Unknown ",
                  "Anyone can do something when they WANT to do it. Really successful people do things when they don't want to do it. - Dr. Phil ",
                  "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them. - Dr. Denis Waitley ",
                  "Success is the ability to go from failure to failure without losing your enthusiasm. - Sir Winston Churchill ",
                  "Success seems to be connected with action. Successful people keep moving. They make mistakes but don't quit.- Conrad Hilton ",
                  "Attitudes are contagious. Make yours worth catching. - Unknown ",
                  "Do not let what you cannot do interfere with what you can do. - John Wooden ",
                  "There are only two rules for being successful. One, figure out exactly what you want to do, and two, do it. - Mario Cuomo ",
                  "Sooner or later, those who win are those who think they can. - Richard Bach ",
                  "Vision doesn't usually come as a lightening bolt. Rather it comes as a slow crystallization of life challenges that we one day recognize as a beautiful diamond with great value to ourselves and others. - Dr. Michael Norwood",
                  "Success is a state of mind. If you want success, start thinking of yourself as a success. - Dr. Joyce Brothers ",
                  "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. - Samuel Beckett ",
                  "Flops are a part of life's menu and I've never been a girl to miss out on any of the courses. - Rosalind Russell ",
                  "Cause Change & Lead Accept Change & Survive Resist Change & Die - Ray Norda, Chairman, Novell ",
                  "Winners lose much more often than losers. So if you keep losing but you're still trying, keep it up! You're right on track. - Matthew Keith Groves ",
                  "An idea can turn to dust or magic, depending on the talent that rubs against it. - Bill Bernbach ",
                  "An obstacle is often a stepping stone. - Prescott ",
                  "Life is trying things to see if they work - Ray Bradbury ",
                  "If you worry about yesterday's failures, then today's successes will be few. - Anonymous",
                  "Life is 10% what happens to us and 90% how we react to it. - Dennis P. Kimbro ",
                  "We are all inventors, each sailing out on a voyage of discovery, guided each by a private chart, of which there is no duplicate. The world is all gates, all opportunities. - Ralph Waldo Emerson ",
                  "Knowing is not enough; we must apply. Willing is not enough; we must do. - Johann Wolfgang von Goethe ",
                  "In matters of style, swim with the current; In matters of principle, stand like a rock.- Thomas Jefferson ",
                  "I think and think for months and years. Ninety-nine times, the conclusion is false. The hundredth time I am right. - Albert Einstein ",
                  "Where the willingness is great, the difficulties cannot be great. - Machiavelli",
                  "Strength does not come from physical capacity. It comes from an indomitable will. - Mahatma Gandhi ",
                  "You are what you think about all day long. - Dr. Robert Schuller ",
                  "What you do speaks so loudly that I cannot hear what you say - Ralph Waldo Emerson ",
                  "Success is not to be measured by the position someone has reached in life, but the obstacles he has overcome while trying to succeed. - Booker T. Washington ",
                  "Talent is formed in solitude, character in the bustle of the world. - Johann Wolfgang von Goethe ",
                  "To avoid criticism do nothing, say nothing, be nothing. - Elbert Hubbard ",
                  "If you want to make your dreams come true, the first thing you have to do is wake up. - J.M. Power ",
                  "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day- Robert Frost ",
                  "I’ve learned that no matter what happens, or how bad it seems today, life does go on, and it will be better tomorrow. - Maya Angelou ",
                  "The art of being wise is the art of knowing what to overlook. - William James ",
                  "When I hear somebody sigh, 'Life is hard,' I am always tempted to ask, 'Compared to what? - Sydney Harris ",
                  "Don't let life discourage you; everyone who got where he is had to begin where he was.- Richard L. Evans ",
                  "In three words I can sum up everything I've learned about life: It goes on. - Robert Frost ",
                  "You gain strength, courage and confidence by every experience in which you stop to look fear in the face. - Eleanor Roosevelt ",
                  "Sometimes even to live is an act of courage. - Seneca ",
                  "Do first things first, and second things not at all. - Peter Drucker. ",
                  "The only people who find what they are looking for in life are the fault finders. - Foster's Law ",
                  "Defeat is not bitter unless you swallow it. - Joe Clark ",
                  "I am an optimist. It does not seem too much use being anything else. - Winston Churchill ",
                  "Positive anything is better than negative thinking. - Elbert Hubbard ",
                  "People seem not to see that their opinion of the world is also a confession of character. - Ralph Waldo Emerson ",
                  "Those who wish to sing, always find a song. - Swedish Proverb ",
                  "If you're going through hell, keep going. - Winston Churchill ",
                  "The sun shines and warms and lights us and we have no curiosity to know why this is so; but we ask the reason of all evil, of pain, and hunger, and mosquitoes and silly people. - Ralph Waldo Emerson ",
                  "Life is a shipwreck but we must not forget to sing in the lifeboats. – Voltaire ",
                  "Enduring habits I hate.... Yes, at the very bottom of my soul I feel grateful to all my misery and bouts of sickness and everything about me that is imperfect, because this sort of thing leaves me with a hundred backdoors through which I can escape from enduring habits. - Friedrich Nietzsche ",
                  "There is no education like adversity. – Disraeli ",
                  "He who has a why to live can bear almost any how. - Friedrich Nietzsche ",
                  "Adversity introduces a man to himself. - Author Unknown",
                  "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
                  "Strive not to be a success, but rather to be of value. - Albert Einstein",
                  "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale", 
                  "You miss 100% of the shots you don’t take. - Wayne Gretzky", 
                  "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. - Michael Jordan", 
                  "The most difficult thing is the decision to act, the rest is merely tenacity. - Amelia Earhart", 
                  "Every strike brings me closer to the next home run. - Babe Ruth", 
                  "Definiteness of purpose is the starting point of all achievement. - W. Clement Stone", 
                  "Life isn’t about getting and having, it’s about giving and being. - Kevin Kruse", 
                  "Life is what happens to you while you’re busy making other plans. - John Lennon", 
                  "We become what we think about. - Earl Nightingale", 
                  "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. - Mark Twain", 
                  "Life is 10% what happens to me and 90% of how I react to it. - Charles Swindoll"];
    var index = Math.floor(Math.random() * (quotes.length + 1));
    var entry = quotes[index];
    entry = entry.split('- ');
    $("#quoteContainer").empty();
    $("#quoteContainer").html("<div><p class='quote'>" + entry[0] + "</p><p class='quote author'>-- " + entry[1] + "</p></div>")
  }
});

$(document).ready(function(){
  showTip();
  
  $("#requesttips").on("click", function()
  {
    showTip();
  })



  function showTip() {

    var latPlyJumps = {
      descr: `These are tips for Lateral Plyometric Jumps<br>
      asdas<br>
      cyka blyat`,
      reps: "2 sets - 15 reps per set",
      img: "../../img/Squat.gif"
    };

    var highKnee = "These are tips for High Knee Forward Running";
    var latRunning = "These are tips for Lateral Running";

    $(".latPlyJumps").empty()
    $(".latPlyJumps").html("<div><p class='tips'>" + latPlyJumps.descr + "</p></div>")
    $("#imageHolder").attr("src", latPlyJumps.img)
    $("#repCount").empty()
    $("#repCount").html(latPlyJumps.reps)

    $(".highKnee").empty();
    $(".highKnee").html("<div><p class='tips'>" + highKnee + "</p></div>")

    $(".latRunning").empty();
    $(".latRunning").html("<div><p class='tips'>" + latRunning + "</p></div>")
    }
  });