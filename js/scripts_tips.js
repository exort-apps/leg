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
      descr: `*** Tips for Lateral Running ***`,
      reps: "2 sets - 10 meters left and right lateral runs per set",
      img: "../../img/latRunning.gif"
    };

    var boxJumps = {
      descr: `These are tips for boxJumps`,
      reps: " sets -  reps per set",
      img: "../../img/boxJumps.gif"
    };

    var kneeBoxJumps = {
      descr: `These are tips for kneeBoxJumps`,
      reps: " sets -  reps per set",
      img: "../../img/kneeBoxJumps.gif"
    };

    var plyHurdles = {
      descr: `These are tips for plyHurdles`,
      reps: " sets -  reps per set",
      img: "../../img/plyHurdles.gif"
    };

    var shuttleRuns = {
      descr: `These are tips for shuttleRuns`,
      reps: " sets -  reps per set",
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
