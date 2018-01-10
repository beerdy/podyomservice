require 'test_helper'

class WedosControllerTest < ActionController::TestCase
  setup do
    @wedo = wedos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:wedos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create wedo" do
    assert_difference('Wedo.count') do
      post :create, wedo: { description: @wedo.description, image_uid: @wedo.image_uid, slave: @wedo.slave, title: @wedo.title, url: @wedo.url }
    end

    assert_redirected_to wedo_path(assigns(:wedo))
  end

  test "should show wedo" do
    get :show, id: @wedo
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @wedo
    assert_response :success
  end

  test "should update wedo" do
    patch :update, id: @wedo, wedo: { description: @wedo.description, image_uid: @wedo.image_uid, slave: @wedo.slave, title: @wedo.title, url: @wedo.url }
    assert_redirected_to wedo_path(assigns(:wedo))
  end

  test "should destroy wedo" do
    assert_difference('Wedo.count', -1) do
      delete :destroy, id: @wedo
    end

    assert_redirected_to wedos_path
  end
end
