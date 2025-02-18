const Profile = ({id,title,thumbnailUrl,url}) => {
    // const{id,title,thumbnailUrl,url}=props;
      return(
          <article className="profile-card">
            <p>{id}</p>
              <img src={thumbnailUrl} alt="demo"/> 
              <h2>{title}</h2>
               <a href={url} className="button" >details</a> 
          </article>
      );
  }; 