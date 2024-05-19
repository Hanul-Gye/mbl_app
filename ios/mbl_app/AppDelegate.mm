#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"mbl_app";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  // 스플래시 화면 표시를 위한 ViewController 생성
  UIViewController *splashViewController = [UIViewController new];
  splashViewController.view.backgroundColor = [UIColor whiteColor];
  
  // 여기에 스플래시 이미지 뷰를 추가합니다.
  UIImageView *splashImageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"LaunchImage"]];
  splashImageView.contentMode = UIViewContentModeScaleAspectFit;
  splashImageView.frame = splashViewController.view.bounds;
  [splashViewController.view addSubview:splashImageView];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.rootViewController = splashViewController;
  [self.window makeKeyAndVisible];

  // 딜레이 설정 (예: 3초)
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 3 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
    [self loadReactNativeApp:launchOptions];
  });

  return YES;
}

- (void)loadReactNativeApp:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation = [self bundleURL];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:self.moduleName
                                               initialProperties:self.initialProps
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [UIColor whiteColor];

  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;

  self.window.rootViewController = rootViewController;
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
