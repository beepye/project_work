E4e::Application.routes.draw do
  # get "home/index"
  # get "home_day_of/index"
  # get "home_2014/index"

  root :to => 'home_2014#index'
  get '/speakers', to: 'home_2014#speakers'
end
