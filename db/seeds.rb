# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

apt1 = Apartment.create(address:"529 5th ST Apt 3L Brooklyn, NY 11215")

 nick = Roommate.create(first_name: "Nick", last_name: "Schaubeck", email:"nschaubeck@gmail.com", password:"knickstape", apartment_id: 1)

 jason = Roommate.create(first_name: "Jason", last_name: "Feldman", email:"jfeldman517@gmail.com", password:"kugel", apartment_id: 1)

 chore1 = Chore.create(task_name:"clean dishes", completed: false, assigned: true, assignee: "Nick", roommate_id: 1)
 chore2 = Chore.create(task_name:"replace lightbulb", completed: false, assigned: true, assignee: "Nick", roommate_id: 2)
