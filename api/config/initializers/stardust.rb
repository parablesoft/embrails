# frozen_string_literal: true

Stardust.configure do |config|
  config.configure_graphql do |graphql|
    graphql.setup_context do |request|
      # result = Authorization::Authorize.new.(request: request)
      if true
        # {current_user: result.value!}
        {current_user: nil}
      else 
        raise Stardust::Errors::FailedAuthorization, 'Expired token'
      end
    end
  end
end