class SessionsController < ApplicationController



  def new



  end




  def create
    roommate = Roommate.find_by({email: params[:email]})
    if roommate && roommate.authenticate(params[:password])
      session[:roommate_id] = roommate.id
      redirect_to roommate_path(roommate) 
    else
      redirect_to sessions_new_path
    end

    #logged in means a user_id is stored in a session
  end
  def destroy
    session[:roommate_id] = nil
    redirect_to root_path
  end
  



end