class UserMailer < ApplicationMailer
  default from: 'notifications@taskmate.com'
 
  def welcome_email(roommate)
    @roommate = roommate
    @url  = 'http://example.com/login'
    mail(to: @roommate.email, subject: 'Welcome to TaskMate')
  end
end

