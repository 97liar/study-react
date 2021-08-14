import classes from 'src/components/Links/Links.module.css'

export const Links = (props) =>  {
  return (
        <div className={classes.grid}>
          {props.items.map((item) => {
            return (
              <a key={item.title} href={item.href} className={classes.card}>
              <h2 className={classes.title}>{item.title}</h2>
              <p className={classes.discription}>{item.discription}</p>
            </a>
            );
          })}
        </div>
  )
}