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

ActiveRecord::Schema.define(version: 2020_03_26_223459) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.string "name", null: false
    t.integer "num_players", null: false
    t.boolean "private", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.index ["name"], name: "index_games_on_name", unique: true
  end

  create_table "messages", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "game_id", null: false
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_name", null: false
    t.index ["game_id"], name: "index_messages_on_game_id"
  end

  create_table "user_stats", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "pic_id", default: 1
    t.integer "num_games", default: 0
    t.integer "num_wins", default: 0
    t.integer "best_round", default: 0
    t.integer "fastest_win", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_stats_on_user_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
