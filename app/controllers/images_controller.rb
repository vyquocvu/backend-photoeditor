class ImagesController < ApplicationController

  def new
    base64 = params[:image][:base64]
    user = User.find(params[:image][:user])
    unless base64.empty?
      data = base64
      image_ext = base64.split(',').first.split('/').last.split('\;').first
      image_ext =image_ext[0..2]
      image_name = "#{Time.now.to_f}.#{image_ext}"
      image_data = Base64.decode64(data['data:image/png;base64,'.length .. -1])
      File.new("public/save_data/#{image_name}", 'wb') do |f|
        f.write image_data
      end
    end
    redirect_to root_path
  end


end
