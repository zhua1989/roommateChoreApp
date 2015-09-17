class RoommatesController < ApplicationController

def new
  @roommate = Roommate.new
end

def create

    ## check if the username is already in the database
       @roommate = Roommate.create(roommate_params)
    if @user.errors.any?
    #   ## if the username is present, then redirect to the login page
      render template: "/new"
    else 
      ## If the username is not present, then it creates their account
       roommate = Roommate.find_by({email: params[:roommate][:email]})
    ## Start the session for the user
       session[:roommate_id] = roommate.id
       redirect_to roommate_path(roommate) 
     end
  
end


def show
  render :show
end


private


def roommate_params
  params.permit(:first_name, :last_name, :email, :password)
end



end