class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def logged_in?
    if session[:roommate_id]
      true
    else
      false
    end

  end



  def check_current_user?
    if session[:roommate_id] == params[:id].to_i
      true
    else
      false
    end

  end
end
