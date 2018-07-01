$(function() {
  $(".web-app__box").hide();
  $(".web-app__button-choice").hide();
  $(".web-app__choice-man").hide();
  $(".web-app__choice-woman").hide();
  $(".web-app__button--orange").css({ display: "none" });
  $("form").hide();

  let path = document.location.pathname

  $(".web-app__button-main").on("click", function(e) {
    e.preventDefault();
    $(".web-app__left").animate({ width: "55.8vw" });
    $(".web-app__right").animate({ width: "44.2vw" });
    $(".web-app__description").hide();
    $(".web-app__subtitle").hide();
    $(".web-app__title")
      .text(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a urna sit amet"
      )
      .css({ color: "#fc8950" });
    $(".web-app__right").css({ background: "#fc8950" });
    $(".web-app__info").css({
      "border-left": "13px solid #fc8950",
      background: "#f6f5f5"
    });
    $(".web-app__heart").css({
      border: "9px solid #fc8950",
      "background-position": "0.63rem -6.9rem"
    });
    $(".web-app__button-choice").show();
    $(this).hide();
  });

  $(".web-app__button-choice").each(function() {
    $(this).on("click", function() {
      if ($(".web-app__button-choice").length === 3) {
        if ($(".web-app__button-choice").hasClass("web-app__button--orange")) {
          $(".web-app__button-choice").removeClass("web-app__button--orange");
        }
        $(this).addClass("web-app__button--orange");
        let choiceText = $(this)
          .find(".web-app__choice-letter")
          .text();
        $(".web-app__letter").html(choiceText);
        $(".web-app__box").show();
        $(".web-app__left").css({
          background:
            "linear-gradient(rgba(252, 137, 80, .7),rgba(252, 137, 80, .7)), url('"+ path +"static/img/main-background.png') top left no-repeat",
          "background-size": "auto 100vh"
        });
        $(".web-app__button--orange").css({ display: "block" });
      } else {
        if ($(".web-app__button-choice").hasClass("web-app__button--yellow")) {
          $(".web-app__button-choice").removeClass("web-app__button--yellow");
        }
        $(this).addClass("web-app__button--yellow");
        $(".web-app__box").show();
        $(".web-app__left").css({
          background:
            "linear-gradient(rgba(252, 193, 80, .7),rgba(252, 193, 80, .7)), url('"+ path +"static/img/main-background.png') top left no-repeat",
          "background-size": "auto 100vh"
        });
        $(".web-app__button-continue").show();
        if ($(window).width() <= "1440") {
          $(".web-app__percent").css({
            "font-size": "187px",
            "margin-bottom": "15px"
          });
          $(".web-app__result").css({
            "font-size": "37px",
            "margin-bottom": "8px"
          });
        } else {
          $(".web-app__percent").css({
            "font-size": "246px",
            "margin-bottom": "15px"
          });
          $(".web-app__result").css({
            "font-size": "50px",
            "margin-bottom": "8px"
          });
        }
        $(".web-app__result").empty();
        let choiceText = $(this).text();
        $(".web-app__result").html("ПОЛЬЗЕВТЕЛЕЙ - " + choiceText);
        if (
          $(this)
            .children()
            .hasClass("web-app__choice-man")
        ) {
          $(".web-app__number").html("52,4");
        } else if (
          $(this)
            .children()
            .hasClass("web-app__choice-woman")
        ) {
          $(".web-app__number").html("47,6");
        }
      }
    });
  });

  $(".web-app__button-continue").on("click", function() {
    if ($(this).hasClass("web-app__button--orange")) {
      $(".web-app__button-choice").removeClass("web-app__button--orange");
      $(this).removeClass("web-app__button--orange");
      $(this).addClass("web-app__button--yellow");
      $(this).hide();
      $(".web-app__title")
        .text("Lorem ipsum")
        .css({ color: "#fcc150" });
      $(".web-app__right").css({ background: "#fcc150" });
      $(".web-app__info").css({ "border-left": "13px solid #fcc150" });
      $(".web-app__heart").css({
        border: "9px solid #fcc150",
        "background-position": "0.63rem -2.9rem"
      });
      $(".web-app__button-choice").css({ padding: "15px 0" });
      $(".web-app__button-choice")
        .first()
        .css({ "margin-top": "80px" });
      $(".web-app__button-choice")
        .last()
        .remove();
      $(".web-app__box").hide();
      $(".web-app__left").css({
        background: "url('"+ path +"static/img/main-background.png') top left no-repeat",
        "background-size": "auto 100vh"
      });
      $(".web-app__choice-man").show();
      $(".web-app__choice-woman").show();
    } else if ($(this).hasClass("web-app__button--yellow")) {
      $(this).hide();
      $(".web-app__title")
        .text(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
        )
        .css({ color: "#1da7c0" });
      $(".web-app__right").css({ background: "#1da7c0" });
      $(".web-app__info").css({ "border-left": "13px solid #1da7c0" });
      $(".web-app__heart").css({
        border: "9px solid #1da7c0",
        "background-position": "0.63rem 1.1rem"
      });
      $(".web-app__button-choice").hide();
      $(".web-app__box").hide();
      $(".web-app__left").css({
        background: "url('"+ path +"static/img/main-background.png') top left no-repeat",
        "background-size": "auto 100vh"
      });
      $("form").show();
    }
  });

  $(".web-app__form-button").on("click", function() {
    if ($(".web-app__form-button").hasClass("web-app__form-button--active")) {
      $(".web-app__form-button").removeClass("web-app__form-button--active");
    }
    if (
      $(this)
        .children()
        .hasClass("web-app__form-icon--man")
    ) {
      $(this).addClass("web-app__form-button--active");
      $(this)
        .find(".web-app__form-icon--man")
        .css({
          background:
            "url('"+ path +"static/img/icons/man-hover.png') center center no-repeat",
          "background-size": "30px 38px"
        });
      $(".web-app__form-icon--woman").css({
        background:
          "url('"+ path +"static/img/icons/woman.png') center center no-repeat",
        "background-size": "30px 38px"
      });
    } else if (
      $(this)
        .children()
        .hasClass("web-app__form-icon--woman")
    ) {
      $(this).addClass("web-app__form-button--active");
      $(this)
        .find(".web-app__form-icon--woman")
        .css({
          background:
            "url('"+ path +"static/img/icons/woman-hover.png') center center no-repeat",
          "background-size": "30px 38px"
        });
      $(".web-app__form-icon--man").css({
        background: "url('"+ path +"static/img/icons/man.png') center center no-repeat",
        "background-size": "30px 38px"
      });
    }
  });

  let errorName = false;
  let errorEmail = false;
  let errorPassword = false;
  let errorCheckBox = false;

  function checkName() {
    let nameLength = $("#inputName").val().length;
    let nameCheck = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    if (nameLength < 3) {
      $("#inputName").val("");
      $("#inputName").attr("placeholder", "Слишком короткое имя");
      $("#inputName").css({ border: "1px solid red" });
      errorName = true;
    } else if (nameLength > 10) {
      $("#inputName").val("");
      $("#inputName").attr("placeholder", "Слишком длинное имя");
      $("#inputName").css({ border: "1px solid red" });
      errorName = true;
    } else if (!nameCheck.test($("#inputName").val())) {
      $("#inputName").val("");
      $("#inputName").attr("placeholder", "Введите свое имя");
      $("#inputName").css({ border: "1px solid red" });
      errorName = true;
    } else {
      $("#inputName").css({ border: "1px solid green" });
    }
  }

  function checkEmail() {
    let emailCheck = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;

    if (!emailCheck.test($("#inputEmail").val())) {
      $("#inputEmail").val("");
      $("#inputEmail").attr("placeholder", "Неверный формат email");
      $("#inputEmail").css({ border: "1px solid red" });
      errorEmail = true;
    } else {
      $("#inputEmail").css({ border: "1px solid green" });
    }
  }

  function checkPassword() {
    let passwordLength = $("#inputPassword").val().length;
    let passwordCheck = /[0-9]/;
    if (passwordLength < 6) {
      $("#inputPassword").val("");
      $("#inputPassword").attr(
        "placeholder",
        "Пароль содержит меньше 6 символов"
      );
      $("#inputPassword").css({ border: "1px solid red" });
      errorPassword = true;
    } else if (!passwordCheck.test($("#inputPassword").val())) {
      $("#inputPassword").val("");
      $("#inputPassword").attr("placeholder", "В пароле отсутсвуют цифры");
      $("#inputPassword").css({ border: "1px solid red" });
      errorPassword = true;
    } else {
      $("#inputPassword").css({ border: "1px solid green" });
    }
  }

  function checkCheckBox() {
    if ($("#inputCheckBox").data("clicked") === false) {
      errorCheckBox = true;
      $("#errorCheckBox").html("Подтвердите Ваш возраст");
    }
  }

  $("#inputName").focusout(function() {
    checkName();
  });

  $("#inputEmail").focusout(function() {
    checkEmail();
  });
  $("#inputPassword").focusout(function() {
    checkPassword();
  });

  $("#inputCheckBox").focusout(function() {
    $(this).data("clicked", true);
    $("#errorCheckBox").empty();
  });

  $("form").submit(function() {
    errorName = false;
    errorEmail = false;
    errorPassword = false;
    errorCheckBox = false;

    checkName();
    checkEmail();
    checkPassword();
    checkCheckBox();

    if (
      errorName == false &&
      errorEmail == false &&
      errorPassword == false &&
      errorCheckBox == false
    ) {
      alert("Форма валидна");
      return true;
    } else {
      alert("Форма невалидна");
      return false;
    }
  });
});
