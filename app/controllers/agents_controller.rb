class AgentsController < ApplicationController
  before_action :set_agent, only: [:show]

  # GET /agents
  def index
    @agents = Agent.all

    render json: @agents
  end

  # GET /agents/1
  def show
    render json: @agent
  end

  # POST /agents
  def create
    @agent = Agent.new(agent_params)

    if @agent.save
      render json: @agent, status: :created, location: @agent
    else
      render json: @agent.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_agent
      @agent = Agent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def agent_params
      params.require(:agent).permit(:name, :email, :office_location, :speciality)
    end
end
