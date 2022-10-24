# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: You can do a migration, and add a new item to the database. You would call it cohort_id and it would be part of the student model, and after you do db:migrate it will show up on the schemea

Researched answer: If you forget to add the foreign id when setting up the student model, dont worry, you can always add a new column by generating a migration ($ rails generate migration add_columns_to_list), then you would use this syntax in the Active record( add_column :lists, :item, :string ) and make sure its in the students model 

2. Which RESTful routes must always be passed params? Why?

Your answer: When you are getting one(show) when you want to change a single item(edit/update) and when you want to delete a single item(destroy)

Researched answer: def destroy @post = BlogPost.find(params[:id])  
    def update /edit
    @post = BlogPost.find(params[:id]) 
    def show
    @post = BlogPost.find(params[:id])
    So when you are using these restful routes you need to pass in param with the id so that you can target a item from the database, with the same id.

3. Name three rails generator commands. What is created by each?

Your answer: The generate migration will allow you to make changes to the models and it will update the schema. If you want to make a new model you can generate model ClassName name:string age:number, lastly you can generate a rspec testing for checking validation.

Researched answer: to make a new model, you will use :rails generate model Person name:string phone:string, to make changes to the model you will use: rails generate migration add_item_to_list, then you can make changes in the active record. to set up validation and rspec testing you will use: rails generate rspec:install, then you can test if the validation is working properly with out creating new entrys in the database.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
The name of the controller would probably be called StudentController
action: "GET" location: /students
This action would get all the students in the database, and display all the students
action: "POST" location: /students
This action will add a new student to the database and will display all students plus the newly added one.
action: "GET" location: /students/new
This action will allow access the form the create a new student
action: "GET" location: /students/2
This will bring you the page that get the student with id 2 and display all relevant information.
action: "GET" location: /students/2/edit
This will select student with id 2 and allow you to make changes the the that student
action: "PATCH" location: /students/2
This action is going to update the information of student with id 2
action: "DELETE" location: /students/2
This action will find student id 2 and delete that entry.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. I need to be able to add a item to my todo list
2. I need to be able to see all the items in my todo list
3. I need to be able to update and see the updated in todo list
4. I need to be able to remove any items on the todo list
5. I need to be able to check of with items I finsihed on the todo list
6. I need to be able to make some items more imporant then other todo list
7. I need to have a reminder set if there is a certain time things need to get done by
8. I need to be able to label the todo list
9. I need to be able to share my today list with other people so they can see it as well
10. I need to be able to add/set a calernder reminder with imporant todo items on the list.