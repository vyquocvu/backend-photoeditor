class StaticPagesController < ApplicationController
  def home
  end

  def help
  end

  def update_image
    @user = current_user
    @img = Image.find(params['image'])  if !params['image'].nil?
    render action: 'editer'
  end

  def editer
    @user = current_user
  end
end
