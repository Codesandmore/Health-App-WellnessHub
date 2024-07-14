#![no_std]
use soroban_sdk::{contract, contracttype, contractimpl, log, Env, Symbol, symbol_short};

#[contracttype]
pub enum UserData{
    User(Symbol)
}
#[contracttype]
#[derive(Clone)]
pub struct User {
    pub name: Symbol,
    pub daily_calories: u64,
    pub tokens: u64,
    pub time: u64,
}

#[contract]
pub struct FitnessContract;

#[contractimpl]
impl FitnessContract{
    pub fn record_caloric_intake(env: Env, user: Symbol,  caloric_intake: u64, token:u64){
        let mut users=Self::view_record(env.clone(),user.clone());
        let time = env.ledger().timestamp();
        users.name=user.clone();
        users.daily_calories=caloric_intake;
        users.tokens=token;
        users.time=time;
        env.storage().persistent().set(&UserData::User(user), &users);
        log!(&env,"Data Entered");
        return;
    }
    pub fn view_record(env: Env, user: Symbol) -> User {
        let key = UserData::User(user.clone());
        env.storage().instance().get(&key).unwrap_or(User {
            name: symbol_short!("not_found"),
            daily_calories: 0,
            tokens: 0,
            time: 0,
        })
    }
}