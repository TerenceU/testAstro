
export function ReactBaseButton({...props}) {
  if(props.isSkeleton){
    console.log("BaseButton isSkeleton prop is true", props);
    return (
      <button className="bg-gray-200 text-gray-400 cursor-not-allowed animate-pulse" {...props}>
        {props.children}
      </button>
    );
  }else {
    return (
      <button {...props}>
        {props.children}
      </button>
    );
  }
}