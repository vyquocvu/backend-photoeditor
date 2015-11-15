require 'base64'
class ImagesController < ApplicationController

  def new
    user = User.find(params[:image][:user]) if params[:image][:user].present?
    if user.present?
      base64 = params[:image][:base64]
      unless base64.empty?
        data = base64
        image_ext = base64.split(',').first.split('/').last.split('\;').first
        image_ext =image_ext[0..2]
        image_name = "public/save_data/#{Time.now.to_f}.#{image_ext}"
        png  =   Base64.decode64(data['data:image/png;base64,'.length .. -1])
        File.open(image_name, 'wb') { |f|
         f.write(png)
         img = Image.new(:user_id =>  user.id)
         img.location = image_name.gsub('public/','')
         img.save
        }
        redirect_to info_path
      end
    else
      redirect_to root_path
    end
  end

  def cancel
    if logged_in?
       #@img = Image.where(:user_id =>  current_user.id)
       #@img.last.destroy
       redirect_to info_path
    else
      redirect_to login_path
    end
  end

  def print_img
    if logged_in?
      @user = current_user
      base64 = params[:image][:base64]
      unless base64.empty?
        data = base64
        image_ext = base64.split(',').first.split('/').last.split('\;').first
        image_ext =image_ext[0..2]
        image_name = "public/save_data/#{Time.now.to_f}.#{image_ext}"
        png  =   Base64.decode64(data['data:image/png;base64,'.length .. -1])
        File.open(image_name, 'wb') { |f|
         f.write(png)
         img = Image.new(:user_id =>  @user.id)
         img.location = image_name.gsub('public/','')
         img.save
        }
      end
      @img = Image.where(:user_id =>  current_user.id)
    else
      redirect_to login_path
    end
  end


end
