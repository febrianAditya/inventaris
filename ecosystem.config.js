module.exports = {
    apps : [{
        name   : "app1",
        script : "./app.js",
        env: {
            PORT: 80,
            DATABASE_URL: 'postgres://postgres.fswalrekqsjxzscqxrpe:T@ilalat28@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres',
            NODE_ENV: 'production'
        }
    }]
}