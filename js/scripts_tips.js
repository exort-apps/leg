$(document).ready(function(){
  showTip();
  
  $("#requesttips").on("click", function()
  {
    showTip();
  })

  function showTip() {

    var latPlyJumps = {
      descr: `*** Tips for Lateral Plyometric Jumps *** <br>
      Draw a line or set cones in a line 3 meters in lenght. <br>
      Watch the animated explanation and focus on the power output of your jumps. <br>
      Aim for the height but remain in controled stance on the balls of your feet when landing. <br>
      *** Benefits *** <br>
      Lateral movements not only improve strength, stability, and coordination, they also help reduce the risk for sports injuries by enhancing balance and proprioception through the whole body and improving overall hip, knee, and ankle joint stability. <br>
      Lateral drills improve sports performance for athletes who frequently, or abruptly, change direction, cut, or pivot. Specifically, those who play field and court sports—such as soccer, basketball, football, rugby, and tennis—as well as skiers, skaters, gymnasts, and even rock climbers, can benefit from adding side-to-side agility drills to their training routine. <br>
      `,
      reps: "2 sets - 6 jumps total per set",
      img: "../../img/latPlyJumps.gif"
    };

    var highKnee = {
      descr: `*** Tips for High Knee Forward Running *** <br>
      With this exercise aim for the knees to go above the hips. We aim for the most amount of intense repetitions in a short 10 meters line. <br>
      Usually, you will perform 7-10 reps depending on the forward thrust. <br>
      Aim for intensity and power. <br>
      *** Benfits *** <br>
      This exercise will put a lot of stress on your core, especially the lower abdomen muscles. <br>
      It will activate your fast twitch muscles fibers in your quads.`,
      reps: "3 sets - 10 meters per set (aim for knee height)",
      img: "../../img/highKnee.gif"
    };

    var latRunning = {
      descr: `*** Tips for Lateral Running *** <br>
      Keep your body center low and your feet near to the ground. Move as if you are pushing off the ground beneath you to the side. <br>
      Focus on the power of your outside leg ie. the pushing leg.`,
      reps: "2 sets - 10 meters left and right lateral runs per set",
      img: "../../img/latRunning.gif"
    };

    var boxJumps = {
      descr: `*** Tips for Box Jumps *** <br>
      If possible, always set the height of the box to above 80% of your max jump height. We are aiming for intensity over volume. </br>
      Make sure the landing surface is clean and dry to avoid slipping and injuring yourself. <br>
      This may seem simple exercise but it's absolute crucial in power increase. There are almost endless variations that you may use to spice up the game. <br>
      Some variations are to jump with one leg and land on the same leg, jump with both legs and land on single leg, jump with one leg and land with the other leg, etc...`,
      reps: "3 sets - 4 jumps per set",
      img: "../../img/boxJumps.gif"
    };

    var kneeBoxJumps = {
      descr: `*** Tips for Kneeling Box Jumps *** <br>
      As with regular box jumps, we aim for intensity over volume. Set the height of the box above 80% of your max jump height. <br>
      Here you want the transition from kneeling position to a squat to be as fast as possible. Make sure that you don't turn your knees inward when snapping into squat. <br>
      Engage your core and keep it tight throughout the movements.`,
      reps: "3 sets - 3 jumps per set",
      img: "../../img/kneeBoxJumps.gif"
    };

    var plyHurdles = {
      descr: `*** Tips for Plyometric Hurdles *** <br>
      Set 5 to 8 hurdles closely one after the other, you can also lay out empty water bottle or anything else to mark the position of the obstacle. <br>
      In this exercise we aim for jump height while moving forward. Because the obstacles (hurdles) are tightly packed, you don't have to go in deep squat to jump. Land on the balls of your feet and immediately spring into air over the next hurdle. <br>
      Whileairborne you can tuck in your knees to make the exercise that more effectiv.`,
      reps: "4 sets -  5-8 obstacles per set",
      img: "../../img/plyHurdles.gif"
    };

    var shuttleRuns = {
      descr: `*** Tips for Shuttle Runs *** <br>
      Set the two cones 8 to 10 meters apart. Start the run in long full of power strides. Use your arms to gain momentum. On average you will make 5-6 steps in the 10 meter range and you will need to decelerate and turn around. <br>
      When stopping, use the inside of your foot gain a better grip off the ground. We emphasize the power of the push and the length of the single step so make sure that you get your knees up high. `
      reps: "3 sets - 3 runs per set, rest between runs is 10 seconds.",
      img: "../../img/shuttleRuns.gif"
    };

    var latLungeJumps = {
      descr: `These are tips for latLungeJumps`,
      reps: " sets -  reps per set",
      img: "../../img/latLungeJumps.gif"
    };

    var drillsL = {
      descr: `These are tips for drillsL`,
      reps: " sets -  reps per set",
      img: "../../img/drillsL.gif"
    };

    var tuckJumps = {
      descr: `These are tips for tuckJumps`,
      reps: " sets -  reps per set",
      img: "../../img/tuckJumps.gif"
    };

    var jumpLunges = {
      descr: `These are tips for jumpLunges`,
      reps: " sets -  reps per set",
      img: "../../img/jumpLunges.gif"
    };

    var latBoxJumps = {
      descr: `These are tips for latBoxJumps`,
      reps: " sets -  reps per set",
      img: "../../img/latBoxJumps.gif"
    };

    var skaterJumps = {
      descr: `These are tips for skaterJumps`,
      reps: " sets -  reps per set",
      img: "../../img/skaterJumps.gif"
    };

    var latJump90Forward = {
      descr: `*** Tips for Lateral to Forward Jumps (both legs) ***`,
      reps: "3 sets - 3 reps on both sides for each set",
      img: "../../latJump90Forward.gif"
    }

    var latToForwInsLeg = {
      descr: `These are tips for latToForwInsLeg`,
      reps: " sets -  reps per set",
      img: "../../img/latToForwInsLeg.gif"
    };

    var latToForwOutLeg = {
      descr: `These are tips for latToForwOutLeg`,
      reps: " sets -  reps per set",
      img: "../../img/latToForwOutLeg.gif"
    };

    var forwToLatInsLeg = {
      descr: `These are tips for forwToLatInsLeg`,
      reps: " sets -  reps per set",
      img: "../../img/forwToLatInsLeg.gif"
    };

    var forwToLatOutLeg = {
      descr: `These are tips for forwToLatOutLeg`,
      reps: " sets -  reps per set",
      img: "../../img/forwToLatOutLeg.gif"
    };

    $(".latPlyJumps").empty();
    $(".latPlyJumps").html("<div><p class='tips'>" + latPlyJumps.descr + "</p></div>");
    $("#img-latPlyJumps").attr("src", latPlyJumps.img);
    $("#rep-latPlyJumps").empty();
    $("#rep-latPlyJumps").html(latPlyJumps.reps);

    $(".highKnee").empty();
    $(".highKnee").html("<div><p class='tips'>" + highKnee.descr + "</p></div>");
    $("#img-highKnee").attr("src", highKnee.img);
    $("#rep-highKnee").empty();
    $("#rep-highKnee").html(highKnee.reps);

    $(".latRunning").empty();
    $(".latRunning").html("<div><p class='tips'>" + latRunning.descr + "</p></div>");
    $("#img-latRunning").attr("src", latRunning.img);
    $("#rep-latRunning").empty();
    $("#rep-latRunning").html(latRunning.reps);

    $(".boxJumps").empty();
    $(".boxJumps").html("<div><p class='tips'>" + boxJumps.descr + "</p></div>");
    $("#img-boxJumps").attr("src", boxJumps.img);
    $("#rep-boxJumps").empty();
    $("#rep-boxJumps").html(boxJumps.reps);

    $(".kneeBoxJumps").empty();
    $(".kneeBoxJumps").html("<div><p class='tips'>" + kneeBoxJumps.descr + "</p></div>");
    $("#img-kneeBoxJumps").attr("src", kneeBoxJumps.img);
    $("#rep-kneeBoxJumps").empty();
    $("#rep-kneeBoxJumps").html(kneeBoxJumps.reps);

    $(".plyHurdles").empty();
    $(".plyHurdles").html("<div><p class='tips'>" + plyHurdles.descr + "</p></div>");
    $("#img-plyHurdles").attr("src", plyHurdles.img);
    $("#rep-plyHurdles").empty();
    $("#rep-plyHurdles").html(plyHurdles.reps);

    $(".shuttleRuns").empty();
    $(".shuttleRuns").html("<div><p class='tips'>" + shuttleRuns.descr + "</p></div>");
    $("#img-shuttleRuns").attr("src", shuttleRuns.img);
    $("#rep-shuttleRuns").empty();
    $("#rep-shuttleRuns").html(shuttleRuns.reps);

    $(".latLungeJumps").empty();
    $(".latLungeJumps").html("<div><p class='tips'>" + latLungeJumps.descr + "</p></div>");
    $("#img-latLungeJumps").attr("src", latLungeJumps.img);
    $("#rep-latLungeJumps").empty();
    $("#rep-latLungeJumps").html(latLungeJumps.reps);

    $(".drillsL").empty();
    $(".drillsL").html("<div><p class='tips'>" + drillsL.descr + "</p></div>");
    $("#img-drillsL").attr("src", drillsL.img);
    $("#rep-drillsL").empty();
    $("#rep-drillsL").html(drillsL.reps);

    $(".tuckJumps").empty();
    $(".tuckJumps").html("<div><p class='tips'>" + tuckJumps.descr + "</p></div>");
    $("#img-tuckJumps").attr("src", tuckJumps.img);
    $("#rep-tuckJumps").empty();
    $("#rep-tuckJumps").html(tuckJumps.reps);

    $(".jumpLunges").empty();
    $(".jumpLunges").html("<div><p class='tips'>" + jumpLunges.descr + "</p></div>");
    $("#img-jumpLunges").attr("src", jumpLunges.img);
    $("#rep-jumpLunges").empty();
    $("#rep-jumpLunges").html(jumpLunges.reps);

    $(".latBoxJumps").empty();
    $(".latBoxJumps").html("<div><p class='tips'>" + latBoxJumps.descr + "</p></div>");
    $("#img-latBoxJumps").attr("src", latBoxJumps.img);
    $("#rep-latBoxJumps").empty();
    $("#rep-latBoxJumps").html(latBoxJumps.reps);

    $(".skaterJumps").empty();
    $(".skaterJumps").html("<div><p class='tips'>" + skaterJumps.descr + "</p></div>");
    $("#img-skaterJumps").attr("src", skaterJumps.img);
    $("#rep-skaterJumps").empty();
    $("#rep-skaterJumps").html(skaterJumps.reps);

    $(".latJump90Forward").empty();
    $(".latJump90Forward").html("<div><p class='tips'>" + latJump90Forward.descr + "</p></div>");
    $("#img-latJump90Forward").attr("src", latJump90Forward.img);
    $("#rep-latJump90Forward").empty();
    $("#rep-latJump90Forward").html(latJump90Forward.reps);

    $(".latToForwInsLeg").empty();
    $(".latToForwInsLeg").html("<div><p class='tips'>" + latToForwInsLeg.descr + "</p></div>");
    $("#img-latToForwInsLeg").attr("src", latToForwInsLeg.img);
    $("#rep-latToForwInsLeg").empty();
    $("#rep-latToForwInsLeg").html(latToForwInsLeg.reps);

    $(".latToForwOutLeg").empty();
    $(".latToForwOutLeg").html("<div><p class='tips'>" + latToForwOutLeg.descr + "</p></div>");
    $("#img-latToForwOutLeg").attr("src", latToForwOutLeg.img);
    $("#rep-latToForwOutLeg").empty();
    $("#rep-latToForwOutLeg").html(latToForwOutLeg.reps);

    $(".forwToLatInsLeg").empty();
    $(".forwToLatInsLeg").html("<div><p class='tips'>" + forwToLatInsLeg.descr + "</p></div>");
    $("#img-forwToLatInsLeg").attr("src", forwToLatInsLeg.img);
    $("#rep-forwToLatInsLeg").empty();
    $("#rep-forwToLatInsLeg").html(forwToLatInsLeg.reps);

    $(".forwToLatOutLeg").empty();
    $(".forwToLatOutLeg").html("<div><p class='tips'>" + forwToLatOutLeg.descr + "</p></div>");
    $("#img-forwToLatOutLeg").attr("src", forwToLatOutLeg.img);
    $("#rep-forwToLatOutLeg").empty();
    $("#rep-forwToLatOutLeg").html(forwToLatOutLeg.reps);

    };
  
  });

/*
    latPlyJumps
    highKnee
    latRunning
    boxJumps
    kneeBoxJumps
    plyHurdles
    shuttleRuns
    latLungeJumps  -- forward and lateral together
    drillsL
    tuckJumps
    jumpLunges  -- in place
    latBoxJumps
    skaterJumps
    latJump90Forward
    latToForwInsLeg  -- Lateral to Forward 90degree on the inside leg -- to each side
    latToForwOutLeg  -- Lateral to Forward 90degree on the outside leg -- to each side
    forwToLatInsLeg  -- Forward to Lateral 90degree on the inside leg -- to each side
    forwToLatOutLeg  -- Forward to Lateral 90degree on the outside leg -- to each side
*/
