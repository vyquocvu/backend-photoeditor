class OrdersController < ApplicationController
  def create
    order = Order.new(:user_id => current_user.id )
    order.location = @img = Image.where(:user_id => current_user.id).last.location
    order.price = params['order']['price']
    redirect_to order_path if order.save
  end


  def show
    if logged_in?
      @user = current_user
      @orders = Order.where(:user_id =>  current_user.id)
    else
      redirect_to login_path
    end
  end

end
