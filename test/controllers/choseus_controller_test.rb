require 'test_helper'

class ChoseusControllerTest < ActionController::TestCase
  setup do
    @choseu = choseus(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:choseus)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create choseu" do
    assert_difference('Choseu.count') do
      post :create, choseu: { description: @choseu.description, image_uid: @choseu.image_uid, slave: @choseu.slave, title: @choseu.title, url: @choseu.url }
    end

    assert_redirected_to choseu_path(assigns(:choseu))
  end

  test "should show choseu" do
    get :show, id: @choseu
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @choseu
    assert_response :success
  end

  test "should update choseu" do
    patch :update, id: @choseu, choseu: { description: @choseu.description, image_uid: @choseu.image_uid, slave: @choseu.slave, title: @choseu.title, url: @choseu.url }
    assert_redirected_to choseu_path(assigns(:choseu))
  end

  test "should destroy choseu" do
    assert_difference('Choseu.count', -1) do
      delete :destroy, id: @choseu
    end

    assert_redirected_to choseus_path
  end
end
