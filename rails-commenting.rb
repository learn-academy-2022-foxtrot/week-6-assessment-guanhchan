# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the class blogpostcontroller, hold all of the methods to the basic crud functions. You can add even more complex method in this is class to do various things.
class BlogPostsController < ApplicationController
  def index
    # ---2)@post is going to make a SQL call to get all the post in the database under BlogPost from the rails console.
    @posts = BlogPost.all
  end

  # ---3) This a method call that will get the blogpost with a certain id, as the param. The id is the id in the database in the postgresql.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This a a method call that will add a new entry in to the database. Simalar to entering a new item from the rails console.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)This is going to create a new post, and check it is vaild, blog_post_params requires a title and content to be filled for it to be valid.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)This will allow the use to call the edit method with a valid id and it will display the id from the data base with the correct information, simlar to the show method, it the next step is going to be the update.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)After finding the blogpost with the id, it will call the update method in rails and also check if it valid, checking if it contains a title and content.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)After the the item/ blogpost is deleted, it will redirect to the blog_post_path, Im guessing it going to go back to the main show all page.
      redirect_to blog_posts_path
    end
  end

  # ---9)Private means it special and it can only be use in this class
  private
  def blog_post_params
    # ---10) This will check the params of blog_post and it need to have at least a title and content for it to be valid.
    params.require(:blog_post).permit(:title, :content)
  end
end
