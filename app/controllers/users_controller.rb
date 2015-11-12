class UsersController < ApplicationController

  def info
    @user = current_user
  end

  def new
    @user = User.new
  end

  def edit
    if logged_in?
      @user = current_user
    else
      redirect_to signup_path
    end
  end

  def save_image
    byebug
  end

  def update
    user = User.find_by(email: params[:user][:email].downcase)
    if (params[:user][:password] == params[:user][:password_confirmation]) && !params[:user][:password].nil?
      user.update(user_params)
      flash[:success] = "Update success!"
      redirect_to info_path
    else
      flash[:success] = "Update Fail!"
      redirect_to info_path
    end
  end

  def start_now
    if logged_in?
      redirect_to info_path
    else
      redirect_to signup_path
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      flash[:success] = "Welcome to the Sample App!"
      redirect_to info_path
    else
      render 'new'
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end


end
