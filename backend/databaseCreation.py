from app import db, User
import json

# Creation of three fictional users
UserOne = User(name='Dupont Jean', email='jean@arcane.run', claims={
    "authorized_clients": [
        "llt",
        "aur",
        "sho"
    ],
    "features_rights": {
        "ams_feed": 2
    }
})
UserTwo=User(name='Durand Jeanne', email='jeanne@arcane.run', claims={
    "authorized_clients": [
        "all"
    ],
    "features_rights": {
        "admin_tools": 3,
        "adscale_datalab": 3,
        "adscale_gtp": 3,
        "adscale_media": 3,
        "ams_feed": 3,
        "ams_gtp": 3,
        "ams_lab": 3,
        "ams_media": 3,
        "users": 3
    }
})
UserThree = User(name='Lapierre Marie', email='marie@arcane.run', claims={
    "authorized_clients": [
        "tar"
    ],
    "features_rights": {
        "ams_feed": 2
    }
})




# Function to fill the database
def feed_the_database():
    db.session.add_all([UserOne, UserTwo, UserThree])
    db.session.commit()


# Creation of the database
if __name__ == '__main__':
    # create_all() create the database only if it does not already exist
    db.create_all()
    # Check if the database is empty, if not we do not fill it with our data
    if User.query.first() is None:
        feed_the_database()
