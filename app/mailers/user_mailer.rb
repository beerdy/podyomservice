class UserMailer < ApplicationMailer
  default from: 'From site <b766390@yandex.ru>'

  def user_email(user)
    @user = user
    @url = 'http://buhlp.ru'
    mail(to: 'b766390@yandex.ru', subject: "Message from site - #{@url}" )
  end
end
