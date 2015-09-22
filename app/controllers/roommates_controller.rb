
require 'httparty'
require 'pry'

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
       redirect_to roommate_path
     
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
  # if session[:roommate_id] == nil
  #   redirect_to root_path

  # elsif logged_in? && check_current_user?
  #     actual_user = Roommate.find(session[:roommate_id])

  @time = Time.now
  @full_time_month = @time.utc


  ENV["wunderground_key"]
  
  geo_request = HTTParty.get('http://ipinfo.io/geo/')
  puts geo_request
  apiURL = "http://api.wunderground.com/api/" + ENV["wunderground_key"] + "/forecast/q/autoip.json?geo_ip=" + geo_request['ip'] + ".json"
  puts apiURL  


  weather_request = HTTParty.get(apiURL)
  @date = weather_request["forecast"]["txt_forecast"]["date"]
  @morning_forecast = weather_request["forecast"]["txt_forecast"]["forecastday"][0]["fcttext"]
  @night_forecast = weather_request["forecast"]["txt_forecast"]["forecastday"][1]["fcttext"]
  @iconURL = weather_request["forecast"]["txt_forecast"]["forecastday"][0]["icon_url"]
  @night_icon = weather_request["forecast"]["txt_forecast"]["forecastday"][1]["icon_url"]
  puts @iconURL

  @roommate = Roommate.find(session[:roommate_id])
  puts @roommate.id
  puts "LSDKFJ:SLDKFJS:DLFKJ"
end
# end


private


def roommate_params
  params.require(:roommate).permit(:first_name, :last_name, :email, :password, :apartment_id)
end



end