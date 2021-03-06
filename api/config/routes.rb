# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/ping", to: proc { [200, {}, ["pong"]] }

  mount Stardust::Engine, at: "/"
end
