class UserMailer < ApplicationMailer
  default from: 'notifications@taskmate.com'
 
  def welcome_email(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to TaskMate')
  end
end