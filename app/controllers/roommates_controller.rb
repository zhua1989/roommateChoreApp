class RoommatesController < ApplicationController

def new
  @roommate = Roommate.new
end

def create

    ## check if the username is already in the database
       @roommate = Roommate.create(roommate_params)
    if @roommate.errors.any?
    #   ## if the username is present, then redirect to the login page
      render template: "/roommates/new"
    else 
      ## If the username is not present, then it creates their account
       roommate = Roommate.find_by({email: params[:roommate][:email]})
    ## Start the session for the user
       session[:roommate_id] = roommate.id
       redirect_to roommate_path(roommate) 
     end
  
end

# def create
#    @user = User.new(params[:user])

#    respond_to do |format|
#      if @user.save
#        # Tell the UserMailer to send a welcome email after save
#        UserMailer.welcome_email(@user).deliver_later

#        format.html { redirect_to(@user, notice: 'User was successfully created.') }
#        format.json { render json: @user, status: :created, location: @user }
#      else
#        format.html { render action: 'new' }
#        format.json { render json: @user.errors, status: :unprocessable_entity }
#      end
#    end
#  end


def show
  @roommate = Roommate.find(session[:roommate_id])
  puts @roommate.id
  puts "LSDKFJ:SLDKFJS:DLFKJ"
  render :show
end
# def show
#   ##Check to see if there is a session.  If not logged in don't let person go to User Paths
#   if session[:roommate_id] == nil
#     redirect_to root_path
#   ##Checkt to see if logged in if logged in eventually redirect to the user show page
#   else logged_in? && check_current_user?
#   actual_user = Roommate.find(session[:roommate_id])
#       @current_roommate = Roommate.find(session[:roommate_id])
#       @chores = @current_roommate.chores
#       # @tastings = @current_user.tastings
#       redirect_to roommate_path(session[:roommate_id])
#       puts("HELLO CAT")
  
#     end
# end

private


def roommate_params
  params.permit(:first_name, :last_name, :email, :password, :apartment_id)
end



end