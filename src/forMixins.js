import pug from "pug";

const registrationTemplate = pug.compile(
  `
    mixin button(options )
        div(class=btn__block {options.className})
            button(class=options.isPrimary?'btn btn--primary': 'btn btn--second')=options.text
            img(src=require("./assets/arrow_forwardWhite.svg").default, alt="enter", class=options.isImage?"btn__image":"btn__image-none")


   mixin registration(options)
    -
     var registrationClassName = options.isEnter ? "registration" : "registration enter__card";
     var registrationTitle = options.isEnter ? "Регистрация аккаунта" : "Войти";
     var forButton = options.isEnter ? "зарегистрироваться" : "войти";
     var dataEnter = options.isEnter ? "данные для входа в сервис" : "";
     var registrationText = options.isEnter ? "Уже есть аккаунт на Toxin" : "Нет аккаунта на Toxin?";
     var registrationFinish = options.isEnter ? "войти" : "создать";
    div(class = "forRegistration")
        .registration__block
            h2= registrationTitle
            div(class=registrationClassName)
                input(type="text", name="name", class="registrationName", placeholder="Имя")
                input(type="text", name="surname", class="registrationSurname", placeholder="Фамилия")
                .forMale
                    label(for="male")
                        input(type="radio" id="male" name="gender" class="registrationMale" value="male")
                        | Мужчина
                    label(for="female")
                        input(type="radio" id="female" name="gender" class="registrationFemale" value="female")
                        | Женщина
                .born 
                    label(for="born") дата рождения
                        input(type="date", name="born")
            span(class="registration__forEnter")= dataEnter
            label(for="enterEmail") 
                input(type="email", name="enterEmail" class="registrationEmail" placeholder="Email")
                input(type="password", name="enterEmail" class="registrationPassword" placeholder="Пароль")
            div(class=registrationClassName)
                .toggle 
                    input(type="checkbox", name="special" class="toggle-checkbox")
                    label(for="special" class="toggle-label") 
                    span Получать спецпредложения
            +button({text: forButton, isPrimary: true, isImage: true})
            .registration__footer
                span= registrationText
                +button({text: registrationFinish, isPrimary: false})
  `,
  { filename: "registration.pug" }
);

export default registrationTemplate;
