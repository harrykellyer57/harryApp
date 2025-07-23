import {
  useSrpListProps,useSrpListProvider,useSrpListContext 
} from "./srp-list-context"
import { useAccount } from "./account";
import { useSRPListItems } from "./use-srp-list-items";
import { useShowHideAccountSection } from "./use-show-hide-account";
const SRPList = ({ ...props }) {
  const { isShowAccountSection, toggleShowAccountSection } = useShowHook({ ...props });

  const srpListProps = useSRPListProps({ ...props });

const srpListItemComponents = srpUseMemoItems(s);

return <>{srpListItemComponents};</> // Component composition as a single return statement; no explicit return value; renders the component in the outer container. };

};

export default SRPListItem; // Export the component for rendering by other components. };
