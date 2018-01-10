require 'test_helper'

class RecomendationsControllerTest < ActionController::TestCase
  setup do
    @recomendation = recomendations(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:recomendations)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create recomendation" do
    assert_difference('Recomendation.count') do
      post :create, recomendation: { description: @recomendation.description, image_uid: @recomendation.image_uid, slave: @recomendation.slave, title: @recomendation.title, url: @recomendation.url }
    end

    assert_redirected_to recomendation_path(assigns(:recomendation))
  end

  test "should show recomendation" do
    get :show, id: @recomendation
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @recomendation
    assert_response :success
  end

  test "should update recomendation" do
    patch :update, id: @recomendation, recomendation: { description: @recomendation.description, image_uid: @recomendation.image_uid, slave: @recomendation.slave, title: @recomendation.title, url: @recomendation.url }
    assert_redirected_to recomendation_path(assigns(:recomendation))
  end

  test "should destroy recomendation" do
    assert_difference('Recomendation.count', -1) do
      delete :destroy, id: @recomendation
    end

    assert_redirected_to recomendations_path
  end
end
