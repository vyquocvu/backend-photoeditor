class StaticPagesController < ApplicationController
  def home
  end

  def help
  end

  def editer
    @user = current_user
  end
end
