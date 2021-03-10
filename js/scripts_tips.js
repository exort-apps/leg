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
      Whileairborne you can tuck in your knees to make the exercise that more effective.`,
      reps: "4 sets -  5-8 obstacles per set",
      img: "../../img/plyHurdles.gif"
    };

    var shuttleRuns = {
      descr: `*** Tips for Shuttle Runs *** <br>
      Set the two cones 8 to 10 meters apart. Start the run in long full of power strides. Use your arms to gain momentum. On average you will make 5-6 steps in the 10 meter range and you will need to decelerate and turn around. <br>
      When stopping, use the inside of your foot gain a better grip off the ground. We emphasize the power of the push and the length of the single step so make sure that you get your knees up high. `,
      reps: "3 sets - 3 runs per set, rest between runs is 10 seconds.",
      img: "../../img/shuttleRuns.gif"
    };

    var latLungeJumps = {
      descr: `*** Tips for Lateral Lunge Jumps *** <br>
      In this exercise, the most important thing is to maintain control and stability. <br>
      Nevertheless, aim for height when jumping to the side and forward from and into the lunge position, but always prioritize the stability. There are grave dangers for the knees if the exercise is done improperly. <br>
      But don't worry, we will point you in the right direction. When you jump forward and to the outside, the inertia tend to rotate your body around the knee of your landing leg, thus pressuring the knee. <br>
      To solve this, simply engage your core muscles and your hamstrings to stabilize the body. Land soft, with precision`,
      reps: "3 sets - 3 lunge jumps each leg per set",
      img: "../../img/latLungeJumps.gif"
    };

    var drillsL = {
      descr: `*** Tips for L Drill Runs *** <br>
      Only video instructions for now. <br>
      ... will soon be updated with textual instructions. <br>
      Sorry for the inconvenience...`,
      reps: "4 sets - 2 runs each side per set",
      img: "../../img/drillsL.gif"
    };

    var tuckJumps = {
      descr: `*** Tips for Tuck Jumps *** <br>
      The goal of this exercise is to build up powerful hamstrings while also improving your explosive power. The hamstrings have to work pretty hard to pull the legs up as high as possible after the squat jump. <br>
      Go down into a deep squat, spring into the air as with the regular box jump but this time try to tuck in midair as much as possible and as fast as you can. Land soft on the ball off your feet with the knees slightly bent.`,
      reps: "4 sets - 5 reps per set",
      img: "../../img/tuckJumps.gif"
    };

    var jumpLunges = {
      descr: `*** Tips for Lunge Jumps in Spot *** <br>
      Stand in the lunge position. Prepare to jump by bending your knees and sink down into a deep lunge. You should lean slightly forward and contract your core muscles. <br>
      Quickly jump into the air by extending your knees and hips and bring your feet together and switch their positions. You should also switch arms when you do this. Maintain balanced foot position when landing. <br>
      Your forward knee should be straight over your foot and not in front of it. Forward foot should land in full contact with the surface (heel down) and your back foot should land on the ball of the foot. <br>
      Go down into a deep lunge and perform the next rep.`,
      reps: "4 sets - 6 reps per set",
      img: "../../img/jumpLunges.gif"
    };

    var latBoxJumps = {
      descr: `*** Tips for Lateral Box Jumps *** <br>
      If possible, always set the height of the box to above 80% of your max jump height. We are aiming for intensity over volume. </br>
      Position yourself at 90 degrees next to your box. Make sure the landing surface is clean and dry to avoid slipping and injuring yourself. <br>
      This variation of the box jump must be performed in equal repetitions on both left and right side.`,
      reps: "3 sets - 3 reps per set",
      img: "../../img/latBoxJumps.gif"
    };

    var skaterJumps = {
      descr: `*** Tips for Skater Jumps *** <br>
      Stand firmly in a position as if you were going to sprint from a standing start. Knees slightly bent and your core engaged. Your back leg lifted from the ground. <br>
      At the same time, push of the ground to the side and land on your back leg that is now in front of you. Switch your arms midair and the leg that you jumped with is now at the back slightly off the ground. <br>
      Make sure you land soft, pause for a second and then do another rep to the other side. Make sure you hare properly warmed up.`,
      reps: "4 sets - 3 reps to each side per set",
      img: "../../img/skaterJumps.gif"
    };

    var latJump90Forward = {
      descr: `*** Tips for Lateral to Forward Jumps (both legs) *** <br>
      Set the cones in a letter "T" formation, each 1 meter apart. The exercise should be done in an explosive manner, first and foremost, engaging your core muscles. <br>
      In a rapid succesion jump to the side and then forward, both legs used. Make sure that your body is straight meaning that you're landing without your knees wandering inside or outside. <br>
      Even thou the cones are one meter apart, aim for as powerful jump forward as you can. Land into a squat with control over your body. <br>
      An important matter is that you don't perform this exercise without a proper warm-up. <br>
      Again, aim for power.`,
      reps: "3 sets - 3 reps on both sides for each set",
      img: "../../latJump90Forward.gif"
    };

    var latToForwInsLeg = {
      descr: `*** Tips for Lateral to Forward Jumps with inside leg *** <br>
      Set the cones in a letter "T" formation, each 1 meter apart. The exercise should be done in an explosive manner, engaging your core muscles. <br>
      The first step in this exercise is to stand firmly on one leg, for example left. Jump laterally to the left side and then jump forward using the same leg. <br>
      The most important thing is to have a proper warm up. Secondly, always land soft and explode afterwards.`,
      reps: "2 sets - 4 reps each side per set",
      img: "../../img/latToForwInsLeg.gif"
    };

    var latToForwOutLeg = {
      descr: `*** Tips for Lateral to Forward Jumps with outside leg *** <br>
      Set the cones in a letter "T" formation, each 1 meter apart. The exercise should be done in an explosive manner, engaging your core muscles. <br>
      The first step in this exercise is to stand firmly on one leg, for example right. Jump laterally to the left side and then jump forward using the same leg. <br>
      The most important thing is to have a proper warm up. Secondly, always land soft and explode afterwards.`,
      reps: "2 sets - 4 reps each side per set",
      img: "../../img/latToForwOutLeg.gif"
    };

    var forwToLatInsLeg = {
      descr: `*** Tips for Forward to Lateral Jumps with inside leg *** <br>
      Set the cones in a letter "T" formation, each 1 meter apart. The exercise should be done in an explosive manner, engaging your core muscles. <br>
      The first step in this exercise is to stand firmly on one leg, for example left. Jump forward on a single leg and then laterally to the left side with the same leg. <br>
      The most important thing is to have a proper warm up. Secondly, always land soft and explode afterwards.`,
      reps: "2 sets - 4 reps each side per set",
      img: "../../img/forwToLatInsLeg.gif"
    };

    var forwToLatOutLeg = {
      descr: `*** Tips for Forward to Lateral Jumps with outside leg *** <br>
      Set the cones in a letter "T" formation, each 1 meter apart. The exercise should be done in an explosive manner, engaging your core muscles. <br>
      The first step in this exercise is to stand firmly on one leg, for example left. Jump forward on a single leg and then laterally to the right side with the same leg. <br>
      The most important thing is to have a proper warm up. Secondly, always land soft and explode afterwards.`,
      reps: "2 sets - 4 reps each side per set",
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
