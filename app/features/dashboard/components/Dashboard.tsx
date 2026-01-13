import {
  Home,
  Settings,
  Users,
  LogOut,
  Menu,
  BarChart3,
  FileText,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useAuthentication } from "~/features/authentication /provider/AuthenticationProvider";
import { ThemeToggle } from "~/features/theme/components/ThemeToggle";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    url: "#",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    url: "#",
  },
  {
    title: "Documents",
    icon: FileText,
    url: "#",
  },
  {
    title: "Team",
    icon: Users,
    url: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#",
  },
];

export function Dashboard() {
  const { user, signOut } = useAuthentication();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader className="border-b px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Home className="size-4" />
              </div>
              <span className="text-lg font-semibold">My App</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t p-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-2 py-1.5">
                <div className="flex size-8 items-center justify-center rounded-full bg-muted">
                  <span className="text-sm font-medium">
                    {user?.email?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium truncate">
                    {user?.email || "User"}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="w-full justify-start"
              >
                <LogOut className="size-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger>
              <Menu className="size-5" />
            </SidebarTrigger>
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <ThemeToggle />
          </header>

          {/* Main Content Area */}
          <main className="flex-1 p-6">
            <div className="mx-auto max-w-7xl space-y-6">
              {/* Welcome Section */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Welcome back!
                </h2>
                <p className="text-muted-foreground">
                  Here's what's happening with your account today.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Users
                    </CardTitle>
                    <Users className="size-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,543</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Projects
                    </CardTitle>
                    <FileText className="size-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45</div>
                    <p className="text-xs text-muted-foreground">
                      +3 new this week
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Analytics
                    </CardTitle>
                    <BarChart3 className="size-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89.2%</div>
                    <p className="text-xs text-muted-foreground">
                      +2.1% from last week
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Settings
                    </CardTitle>
                    <Settings className="size-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">
                      Configurations active
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest activities and updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                        <FileText className="size-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          New document created
                        </p>
                        <p className="text-xs text-muted-foreground">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                        <Users className="size-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          New team member added
                        </p>
                        <p className="text-xs text-muted-foreground">
                          5 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                        <Settings className="size-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Settings updated</p>
                        <p className="text-xs text-muted-foreground">
                          1 day ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
