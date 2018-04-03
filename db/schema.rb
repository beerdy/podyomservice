# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180403182846) do

  create_table "articles", force: :cascade do |t|
    t.string   "title",       limit: 255
    t.text     "description"
    t.string   "slave",       limit: 255
    t.string   "image_uid",   limit: 255
    t.string   "url",         limit: 255
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "articles", ["id"], name: "sqlite_autoindex_articles_1", unique: true

  create_table "choseus", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "address"
    t.string   "phone"
    t.string   "image_uid"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "men", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "men", ["email"], name: "index_men_on_email", unique: true
  add_index "men", ["reset_password_token"], name: "index_men_on_reset_password_token", unique: true

  create_table "news", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "url"
  end

  create_table "recomendations", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "rich_rich_files", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "rich_file_file_name"
    t.string   "rich_file_content_type"
    t.integer  "rich_file_file_size"
    t.datetime "rich_file_updated_at"
    t.string   "owner_type"
    t.integer  "owner_id"
    t.text     "uri_cache"
    t.string   "simplified_type",        default: "file"
  end

  create_table "services", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "sort"
  end

  create_table "sliders", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "socials", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "tarifs", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "contact"
    t.string   "subject"
    t.string   "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wedos", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "slave"
    t.string   "image_uid"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

end
